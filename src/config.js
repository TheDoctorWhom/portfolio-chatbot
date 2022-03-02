// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from './DogPicture.jsx';
import BotAvatar from './Components/BotAvatar.jsx';
import Resume from './Resume.jsx';

const config = {
  botName: "Interview Chatbot",
  initialMessages: [createChatBotMessage(`Hello, welcome to my portfolio. If you are a recuiter or poltenial employer then start here. I can ansswer most of the questions you might have.`)],

  customComponents:{
    botAvatar: (props) => <BotAvatar {...props} />
  },

  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: 'Resume',
      widgetFunc: (props) => <Resume {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#1373e7',
    },
    chatButton: {
      backgroundColor: '#1373e7',
    },
  },

}

export default config
