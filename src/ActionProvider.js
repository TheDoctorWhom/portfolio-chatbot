

// in ActionProvider.js
class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }


  greet = () => {
    // const message = this.createChatbotMessage('Hello. Nice to meet you. How can I help you today?');
    // this.addMessageToState(message);
    this.addTextReply('Hello. Nice to meet you. How can I help you today?');
  }

  experience = () => {
    // this.addTextReply('I have five years Front-End Developemnt work experience. Mostly Working in JavaScript and React. I also know a few other languages including HTML, CSS, and Front-End Frameworks for these such as BootStrap, and Sentimental-UI.');
    this.resume(`I have five years of Front-End Development work experience. Mostly Working in JavaScript and React. I also know a few other languages, including HTML, CSS, and Front-End Frameworks for those, such as BootStrap, and Sentimental-UI.`);
  }

  education = () => {
    this.addTextReply(`I have a Master's Degree and a Bachelor's degree`);
  }

  visa = () => {
    this.addTextReply(`I am a US Citizen`);
  }

  // email = () => {
  //   this.addTextReply(`My email is: zak.dutton@gmail.com`);
  // }

  // phone = () => {
  //   this.addTextReply(`My cellphone number is: 720-277-2969`);
  // }

  // github = () => {
  //   this.addTextReply(`My GitHub address is: https://github.com/TheDoctorWhom`);
  // }

  // linkdin = () => {
  //   this.addTextReply(`My Linkdin address is: https://www.linkedin.com/in/zachery-dutton-a61590156/`);
  // }

  sorry = () => {
    this.addTextReply(`I am sorry I do not understand. Could you try again?`);
  }

  location = () => {
    this.addTextReply(`I live in Westminster, Colorado. I am looking to work remotely and I am unwilling to relocate.`);
  }

  salary = () => {
    this.addTextReply(`I am looking to earn 85K to 120K, but this is dependent on the position and the responsibilities and hours required.`);
  }


    handleDog = () => {
    const message = this.createChatbotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );
    this.addMessageToState(message);
  }

  resume = (messageString) => {
    const resumeMessage = `Here is my most updated resume`;
    const message = this.createChatbotMessage(
      (messageString === undefined) ? resumeMessage:`${messageString} ${resumeMessage}`,
      {
        widget: 'Resume',
      }
    );

    this.addMessageToState(message);
  }

  github = () => {
    const message = this.createChatbotMessage(
      "My GitHub address is: https://github.com/TheDoctorWhom",
      {
        widget: 'GitHub',
      }
    );

    this.addMessageToState(message);
  }

  linkedin = () => {
    const message = this.createChatbotMessage(
      "My Linkdin address is: https://www.linkedin.com/in/zachery-dutton-a61590156/",
      {
        widget: 'LinkedIn',
      }
    );

    this.addMessageToState(message);
  }

  phone = () => {
    const message = this.createChatbotMessage(
      "My cellphone number is: 720-277-2969",
      {
        widget: 'Phone',
      }
    );

    this.addMessageToState(message);
  }

  email = () => {
    const message = this.createChatbotMessage(
      "My email is: zak.dutton@gmail.com",
      {
        widget: 'Email',
      }
    );

    this.addMessageToState(message);
  }

  addMessageToState = (message) => {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }))
  }

  addTextReply = (messageString) => {
    const message = this.createChatbotMessage(messageString);
    this.addMessageToState(message);
  }
}

export default ActionProvider;
