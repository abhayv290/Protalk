import { PrettyChatWindow } from "react-chat-engine-pretty";
import PropTypes from 'prop-types'

const ChatsPage = (props) => {


    return (
        <div style={{ height: "100vh", }}>
            <PrettyChatWindow
                projectId="d03a35d8-9aa8-4f8b-9210-b67e03a672ab"
                username={props.user.username}
                secret={props.user.secret} // pass1234
                style={{ height: "100%" }}
            />
        </div>
    );
};

ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired,
    }).isRequired,
};

export default ChatsPage;