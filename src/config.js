// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from './DogPicture.jsx';
import BotAvatar from './Components/BotAvatar.jsx';
import UserAvatar from './Components/UserAvatar.jsx';
import GitHub from './Components/GitHub.jsx';
import LinkedIn from './Components/LinkedIn.jsx';
import Phone from './Components/Phone.jsx';
import Email from './Components/Email.jsx';
import Resume from './Resume.jsx';

const config = {
  botName: "Interview Chatbot",
  initialMessages: [createChatBotMessage(`Hello, welcome to my portfolio. If you are a recuiter or poltenial employer then start here. I can ansswer most of the questions you might have.`)],

  customComponents:
  {
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />
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
    {
      widgetName: 'GitHub',
      widgetFunc: (props) => <GitHub {...props} />,
    },
    {
      widgetName: 'LinkedIn',
      widgetFunc: (props) => <LinkedIn {...props} />,
    },
    {
      widgetName: 'Phone',
      widgetFunc: (props) => <Phone {...props} />,
    },
    {
      widgetName: 'Email',
      widgetFunc: (props) => <Email {...props} />,
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
