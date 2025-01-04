import { useOCAuth } from '@opencampus/ocid-connect-js';

const UserTokenPage = () => {

    const { authState, ocAuth, OCId, ethAddress } = useOCAuth();
    console.log(ocAuth);

    if (authState.error !== undefined) {
        return <div>Error: { "userpageerrors" + authState.error.message}</div>;
    } else {
        return (
            <div>
                <h4>User Info</h4>
                <pre>{ethAddress}</pre>
                <pre>{OCId}</pre>
            </div>
        );
    }
};

export default UserTokenPage;