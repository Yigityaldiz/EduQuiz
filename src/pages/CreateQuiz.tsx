import { useState, useEffect } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { useOCAuth } from '@opencampus/ocid-connect-js';
import { useNavigate } from 'react-router-dom';
import '@mdxeditor/editor/style.css';
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  toolbarPlugin,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  UndoRedo,
  CodeToggle,
  InsertTable,
  InsertThematicBreak,
  InsertAdmonition,
  ListsToggle,
  directivesPlugin,
  AdmonitionDirectiveDescriptor,
  tablePlugin,
} from '@mdxeditor/editor';
import axios from 'axios';

/* -------------------- Arayüz Tanımları -------------------- */
interface Answer {
  value: string;
  isCorrect: boolean;
}

interface Question {
  questionType: string;  // 'multiple-choice' | 'true-false'
  markdown: string;
  answers: Answer[];
}

interface QuizData {
  userId: string;
  title: string;
  description: string;
  winnerCount: number;
  duration: number;
  liquidity?: string;
  questions: Question[];
}

const CreateQuiz = () => {
  const navigate = useNavigate();
  /* -------------------- Step State -------------------- */
  const [step, setStep] = useState<'questions' | 'parameters'>('questions');

  /* -------------------- OCAuth (UserId) -------------------- */
  const { OCId, ethAddress } = useOCAuth();
  useEffect(() => {
    if (!OCId || !ethAddress) {
      const randomUserId = 'quest.edu_Ox8e3d';
      localStorage.setItem('userId', randomUserId);
    } else {
      const userId = `${OCId}_${ethAddress}`;
      localStorage.setItem('userId', userId);
    }
  }, [OCId, ethAddress]);

  /* -------------------- Quiz Data State -------------------- */
  const [quizData, setQuizData] = useState<QuizData>({
    userId: '',
    title: '',
    description: '',
    winnerCount: 1,
    duration: 60,
    liquidity: '',
    questions: [],
  });

  // Hangi soruyu düzenliyoruz?
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // MDXEditor yeniden mount için
  const [editorKey, setEditorKey] = useState(0);

  /* -------------------- Soru Formu (useForm) -------------------- */
  const {
    control: controlQuestion,
    watch: watchQuestion,
    reset: resetQuestion,
  } = useForm<Question>({
    defaultValues: {
      questionType: 'multiple-choice',
      markdown: '',
      answers: [
        { value: '', isCorrect: false },
        { value: '', isCorrect: false },
      ],
    },
  });

  const {
    fields: fieldsAnswer,
    append,
    remove,
    update,
  } = useFieldArray({
    control: controlQuestion,
    name: 'answers',
  });

  const watchQuestionType = watchQuestion('questionType');

  // Debug amaçlı
  useEffect(() => {
    const sub = watchQuestion((data) => {
      console.log('Question Form data:', data);
    });
    return () => sub.unsubscribe();
  }, [watchQuestion]);

  /* -------------------- Quiz Parametre Formu (useForm) -------------------- */
  const {
    control: controlParameters,
    handleSubmit: handleSubmitParameters,
    reset: resetParameters,
  } = useForm<QuizData>({
    defaultValues: quizData,
  });

  /* -------------------- LocalStorage: quizData yükleme -------------------- */
  useEffect(() => {
    const saved = localStorage.getItem('quizData');
    if (saved) {
      try {
        const parsed: QuizData = JSON.parse(saved);
        setQuizData(parsed);
        resetParameters(parsed);
      } catch (err) {
        console.error('Error parsing quizData from localStorage:', err);
      }
    }
  }, [resetParameters]);

  /* -------------------- LocalStorage: quizData kaydetme -------------------- */
  useEffect(() => {
    localStorage.setItem('quizData', JSON.stringify(quizData));
    console.log('Quiz data saved to localStorage:', quizData);
  }, [quizData]);

  /* -------------------- Soru Kaydet / Güncelle -------------------- */
  const handleSaveOrUpdateQuestion = () => {
    const currentFormData = watchQuestion();
    const newQuestion: Question = {
      questionType: currentFormData.questionType,
      markdown: currentFormData.markdown,
      answers: currentFormData.answers,
    };

    if (editingIndex !== null) {
      // Düzenleme
      const updated = [...quizData.questions];
      updated[editingIndex] = newQuestion;
      setQuizData({ ...quizData, questions: updated });
      setEditingIndex(null);
      console.log(`Question ${editingIndex + 1} updated.`);
    } else {
      // Yeni Soru
      setQuizData({
        ...quizData,
        questions: [...quizData.questions, newQuestion],
      });
      console.log('New question added.');
    }

    // Form sıfırlama
    resetQuestion({
      questionType: 'multiple-choice',
      markdown: '',
      answers: [
        { value: '', isCorrect: false },
        { value: '', isCorrect: false },
      ],
    });
    setEditorKey((prev) => prev + 1);
  };

  /* -------------------- Soru Düzenleme -------------------- */
  const handleEditQuestion = (index: number) => {
    const q = quizData.questions[index];
    resetQuestion(q);
    setEditorKey((prev) => prev + 1);
    setEditingIndex(index);
    setStep('questions');
    console.log(`Editing question ${index + 1}`);
  };

  /* -------------------- onSubmitParameters (Parametre Formu Submit) -------------------- */
  const onSubmitParameters = async (data: QuizData) => {
    try {
      // 1) quizData state’ini güncelle
      //    (title, description, winnerCount, duration, liquidity)
      setQuizData((prev) => ({
        ...prev,
        title: data.title,
        description: data.description,
        winnerCount: data.winnerCount,
        duration: data.duration,
        liquidity: data.liquidity ?? '',
      }));

      // 2) userId’yi localStorage’dan al
      const userId = localStorage.getItem('userId') || '';
      const payload = {
        ...quizData,
        // quizData içindeki questions vb. koruyoruz
        // ama parametre formundan gelen data’yı overwrite ediyoruz
        title: data.title,
        description: data.description,
        winnerCount: data.winnerCount,
        duration: data.duration,
        liquidity: data.liquidity ?? '',
        userId,
      };

      // 3) axios post isteği
      const response = await axios.post('https://api.eduquiz.space/api/quizzes', payload);

      console.log('Quiz başarıyla gönderildi:', response.data);
      if (response.data.status === 'success') {
        alert('Quiz created successfully!');
        navigate(`/userPage/${userId}`);
      }
      else {
        alert('An error occurred, please try again.');
      }

    } catch (error) {
      console.error('Quiz gönderilirken hata oluştu:', error);
      alert('An error occurred, please try again.');
    }
  };

  /* -------------------- showLiquidityFields State -------------------- */
  const [showLiquidityFields, setShowLiquidityFields] = useState<boolean>(false);

  /* -------------------- Render -------------------- */
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-5xl h-auto border-2 bg-white rounded-lg shadow-lg">
        {/* ÜST BAR */}
        <div className="border-b-2 border-gray-300 p-6 flex justify-between items-center">
          <div>
            <p className="text-3xl font-bold">Let's Create Your Quiz!</p>
            <p className="text-gray-600">
              You can create your quiz by following the steps below.
            </p>
          </div>
          {step === 'questions' && (
            <button
              type="button"
              className={`bg-blue-500 text-white px-4 py-2 rounded-md ${quizData.questions.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              onClick={() => {
                if (quizData.questions.length > 0) {
                  setStep('parameters');
                } else {
                  alert('Please add at least one question before proceeding.');
                }
              }}
              disabled={quizData.questions.length === 0}
            >
              Next: Quiz Parameters
            </button>
          )}
        </div>

        {/* STEPS */}
        <div className="p-6">
          {/* Adım Göstergeleri */}
          <div className="flex justify-center mb-6">
            <div className={`flex items-center ${step === 'questions' ? 'text-blue-500' : 'text-gray-500'}`}>
              <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center">1</div>
              <span className="ml-2">Questions</span>
            </div>
            <div className="mx-4">→</div>
            <div className={`flex items-center ${step === 'parameters' ? 'text-blue-500' : 'text-gray-500'}`}>
              <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center">2</div>
              <span className="ml-2">Parameters</span>
            </div>
          </div>

          {/* QUESTIONS ADIMI */}
          {step === 'questions' && (
            <div className="grid grid-cols-4 gap-6">
              {/* SOL FORM (Soru Oluşturma) */}
              <div className="col-span-3">
                <form className="space-y-6">
                  {/* Soru Tipi */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Select Question Type</label>
                    <Controller
                      name="questionType"
                      control={controlQuestion}
                      render={({ field }) => (
                        <select
                          {...field}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-10 p-2"
                        >
                          <option value="multiple-choice">Multiple Choice</option>
                          <option value="true-false">True/False</option>
                        </select>
                      )}
                    />
                  </div>

                  {/* Soru (MDXEditor) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Enter the question below</label>
                    <Controller
                      name="markdown"
                      control={controlQuestion}
                      render={({ field }) => (
                        <MDXEditor
                          key={editorKey}
                          markdown={field.value}
                          onChange={field.onChange}
                          plugins={[
                            headingsPlugin(),
                            listsPlugin(),
                            quotePlugin(),
                            thematicBreakPlugin(),
                            markdownShortcutPlugin(),
                            directivesPlugin({
                              directiveDescriptors: [AdmonitionDirectiveDescriptor],
                            }),
                            tablePlugin(),
                            toolbarPlugin({
                              toolbarContents: () => (
                                <div className="flex space-x-2">
                                  <UndoRedo />
                                  <BlockTypeSelect />
                                  <BoldItalicUnderlineToggles />
                                  <CodeToggle />
                                  <InsertTable />
                                  <InsertThematicBreak />
                                  <InsertAdmonition />
                                  <ListsToggle />
                                </div>
                              ),
                            }),
                          ]}
                          className="border border-gray-300 rounded-md p-2 h-40"
                        />
                      )}
                    />
                  </div>

                  {/* ANSWERS */}
                  <div>
                    <p className="text-lg font-medium">Enter the answer options and select the correct one</p>
                    <div className="flex flex-col space-y-4 mt-4">
                      {watchQuestionType === 'true-false' ? (
                        fieldsAnswer.map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              checked={item.isCorrect}
                              onChange={() => {
                                // Tıklanınca tüm cevapları false yap, index'i true
                                fieldsAnswer.forEach((_, idx) => {
                                  update(idx, {
                                    ...fieldsAnswer[idx],
                                    isCorrect: idx === index,
                                  });
                                });
                              }}
                              className="mr-2 h-4 w-4 text-blue-600 border-gray-300"
                            />
                            <Controller
                              name={`answers.${index}.value`}
                              control={controlQuestion}
                              render={({ field }) => (
                                <input
                                  {...field}
                                  placeholder={index === 0 ? 'True' : 'False'}
                                  className="flex-1 border border-gray-300 rounded-md p-2"
                                />
                              )}
                            />
                          </div>
                        ))
                      ) : (
                        fieldsAnswer.map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              checked={item.isCorrect}
                              onChange={() => {
                                fieldsAnswer.forEach((_, idx) => {
                                  update(idx, {
                                    ...fieldsAnswer[idx],
                                    isCorrect: idx === index,
                                  });
                                });
                              }}
                              className="mr-2 h-4 w-4 text-blue-600 border-gray-300"
                            />
                            <Controller
                              name={`answers.${index}.value`}
                              control={controlQuestion}
                              render={({ field }) => (
                                <input
                                  {...field}
                                  placeholder={`Answer option ${index + 1}`}
                                  className="flex-1 border border-gray-300 rounded-md p-2"
                                />
                              )}
                            />
                            {fieldsAnswer.length > 1 && (
                              <button
                                type="button"
                                className="text-red-500 hover:text-red-700"
                                onClick={() => remove(index)}
                              >
                                Sil
                              </button>
                            )}
                          </div>
                        ))
                      )}
                    </div>

                    {/* Add Answer Option (Multiple Choice) */}
                    {watchQuestionType !== 'true-false' && (
                      <button
                        type="button"
                        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md"
                        onClick={() => append({ value: '', isCorrect: false })}
                      >
                        Add Answer Option +
                      </button>
                    )}
                  </div>

                  {/* Soru Kaydet Butonu */}
                  <div>
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-6 py-3 rounded-md w-full"
                      onClick={handleSaveOrUpdateQuestion}
                    >
                      {editingIndex !== null ? 'Update Question' : 'Add Question +'}
                    </button>
                  </div>
                </form>
              </div>

              {/* SAĞ TARAF: Soru Listesi */}
              <div className="col-span-1">
                <div className="h-full w-full border-2 rounded-2xl p-4 bg-gray-50 overflow-y-auto">
                  <p className="text-2xl font-semibold mb-4">Questions List</p>
                  <ul className="space-y-2">
                    {quizData.questions.length === 0 ? (
                      <p className="text-gray-500">No questions added yet.</p>
                    ) : (
                      quizData.questions.map((q, idx) => (
                        <li
                          key={idx}
                          className="p-2 bg-white rounded-md shadow-sm cursor-pointer hover:bg-gray-100"
                          onClick={() => handleEditQuestion(idx)}
                        >
                          <p className="font-medium">{`Question ${idx + 1}`}</p>
                          <p className="text-sm text-gray-600">
                            {q.markdown.substring(0, 50)}...
                          </p>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* PARAMETERS ADIMI */}
          {step === 'parameters' && (
            <div className="p-6">
              {/* 
                Dikkat: "onSubmit" prop ile handleSubmitParameters fonksiyonu 
                React Hook Form'a bağlı "onSubmitParameters" callback’ini tetikliyor
              */}
              <form onSubmit={handleSubmitParameters(onSubmitParameters)} className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Quiz Parameters</h2>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <Controller
                    name="title"
                    control={controlParameters}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Enter quiz title"
                      />
                    )}
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <Controller
                    name="description"
                    control={controlParameters}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Enter quiz description"
                      />
                    )}
                  />
                </div>

                {/* Winner Count */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Winner Count</label>
                  <Controller
                    name="winnerCount"
                    control={controlParameters}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="number"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        min={1}
                      />
                    )}
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
                  <Controller
                    name="duration"
                    control={controlParameters}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="number"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        min={1}
                      />
                    )}
                  />
                </div>

                {/* Likidite Ekle Butonu */}
                <div>
                  <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setShowLiquidityFields(!showLiquidityFields)}
                  >
                    {showLiquidityFields ? 'Remove Liquidity' : 'Add Liquidity'}
                  </button>
                </div>

                {/* Likidite Alanları */}
                {showLiquidityFields && (
                  <div className="mt-4 space-y-4">
                    <button
                      type="button"
                      className="bg-indigo-500 text-white px-4 py-2 rounded-md"
                      onClick={() => alert('Cüzdan bağlama işlemi burada')}
                    >
                      Connect Wallet
                    </button>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Liquidity</label>
                      <Controller
                        name="liquidity"
                        control={controlParameters}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter liquidity details"
                          />
                        )}
                      />
                    </div>
                  </div>
                )}

                {/* Form Butonları */}
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-6 py-3 rounded-md"
                    onClick={() => setStep('questions')}
                  >
                    Back to Questions
                  </button>

                  {/* DİKKAT: Artık type="submit" */}
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-6 py-3 rounded-md"

                  >
                    Submit Quiz
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
