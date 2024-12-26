import { useState, useEffect } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import '@mdxeditor/editor/style.css'
import {  MDXEditor, 
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
    CreateLink,
    InsertTable,
    InsertThematicBreak,
    InsertAdmonition,
    ListsToggle,
    directivesPlugin,
    AdmonitionDirectiveDescriptor,
    tablePlugin } from '@mdxeditor/editor';

const CreateQuiz = () => {
  const { control, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      questionType: 'multiple-choice',
      markdown: '',
      answers: [{ value: '' }, { value: '' }],
      correctAnswerIndex: null,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'answers',
  });

  const [questions, setQuestions] = useState([]); // Soruların listesi
  const [editingIndex, setEditingIndex] = useState(null); // Düzenlenen sorunun indeksi

  useEffect(() => {
    const subscription = watch((data) => console.log('Form data:', data));
    return () => subscription.unsubscribe();
  }, [watch]);

  const questionType = watch('questionType');

  const onSubmit = (data) => {
    const newQuestion = {
      questionText: data.markdown,
      answers: data.answers.map((item) => item.value),
      correctAnswer: data.correctAnswerIndex !== null ? data.answers[data.correctAnswerIndex].value : null,
    };

    if (editingIndex !== null) {
      const updatedQuestions = [...questions];
      updatedQuestions[editingIndex] = newQuestion;
      setQuestions(updatedQuestions);
      setEditingIndex(null);
    } else {
      setQuestions([...questions, newQuestion]);
    }

    // Formu ve state'leri sıfırla
    reset({
      questionType: 'multiple-choice',
      markdown: '',
      answers: [{ value: '' }, { value: '' }],
      correctAnswerIndex: null,
    });
  };

  const handleDeleteAnswer = (index) => {
    remove(index);
  };

  const handleEditQuestion = (index) => {
    const question = questions[index];
    reset({
      questionType: question.questionType || 'multiple-choice',
      markdown: question.questionText,
      answers: question.answers.map((ans) => ({ value: ans })),
      correctAnswerIndex: question.answers.indexOf(question.correctAnswer),
    });
    setEditingIndex(index);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[1200px] h-[800px] mt-[-50px] border-2 bg-white rounded-lg">
        <div className='border-b-2 border-gray-300 p-2'>
          <p className='text-2xl font-medium'>Let's Create Your Questions!</p>
          <p>You can create your questions by using the editor below.</p>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Submit</button>
        </div>
        <div className='grid grid-cols-4 gap-4'>
            <div className='col-span-3'>
            <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <div className="mb-4 ">
            <label className="block text-sm font-medium text-gray-700">Select Question Type</label>
            <Controller
              name="questionType"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm h-10"
                >
                  <option value="multiple-choice">Multiple Choice</option>
                  <option value="true-false">True/False</option>
                </select>
              )}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Enter the question below</label>
            <Controller
              name="markdown"
              control={control}
              render={({ field }) => (
                <MDXEditor
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
                  className="border border-gray-300 rounded-md p-2"
                />
              )}
            />
          </div>
          <div className=''>
            <p>Enter the answer options and select the correct one</p>
            <div className="flex flex-col space-y-2 mt-2">
              {questionType === "true-false" ? (
                ["True", "False"].map((option, index) => (
                  <div key={index} className="flex items-center">
                    <Controller
                      name="correctAnswerIndex"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="radio"
                          checked={field.value === index}
                          onChange={() => field.onChange(index)}
                          className="mr-2"
                        />
                      )}
                    />
                    <span>{option}</span>
                  </div>
                ))
              ) : (
                fields.map((item, index) => (
                  <div key={item.id} className="flex items-center">
                    <Controller
                      name="correctAnswerIndex"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="radio"
                          checked={field.value === index}
                          onChange={() => field.onChange(index)}
                          className="mr-2"
                        />
                      )}
                    />
                    <Controller
                      name={`answers.${index}.value`}
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          placeholder={`Answer option ${index + 1}`}
                          className="border border-gray-300 rounded-md p-2 w-full"
                        />
                      )}
                    />
                    {fields.length > 1 && (
                      <button
                        type="button"
                        className="ml-2 text-red-500"
                        onClick={() => handleDeleteAnswer(index)}
                      >
                        Sil
                      </button>
                    )}
                  </div>
                ))
              )}
            </div>
            {questionType !== "true-false" && (
              <button
                type="button"
                className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => append({ value: '' })}
              >
                Ekle
              </button>
            )}
          </div>
            </form>
            </div>
            <div className='col-span-1'>
             <div className='h-[600px] w-[240px] border-2 rounded-2xl mt-[40px] ml-[40px]' >
                <p className='text-xl font-medium text-left p-2 '>Questions List</p>
                <ul className="list-disc pl-5">
                  {questions.map((q, index) => (
                    <li
                      key={index}
                      className="mt-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
                      onClick={() => handleEditQuestion(index)}
                    >
                      <p className="font-semibold">{`Question ${index + 1}`}</p>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => {
                    reset({
                      questionType: 'multiple-choice',
                      markdown: '',
                      answers: [{ value: '' }, { value: '' }],
                      correctAnswerIndex: null,
                    });
                    setEditingIndex(null);
                  }}
                >
                  Add Question +
                </button>
             </div>
            </div>
        </div>
       
      </div>
    </div>
  );
};

export default CreateQuiz;
