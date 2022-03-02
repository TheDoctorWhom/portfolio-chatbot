
// in MessageParser.js
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message.includes('dog')) {
      this.actionProvider.handleDog();
    }
    else if (message.includes('experience') || message.includes('work history')) {
      this.actionProvider.experience();
    }
    else if (message.includes('education')) {
      this.actionProvider.education();
    }
    else if (message.includes('visa')) {
      this.actionProvider.visa();
    }
    else if (message.includes('resume')) {
      this.actionProvider.resume();
    }
    else if (message.includes('email')) {
      this.actionProvider.email();
    }
    else if (message.includes('phone')) {
      this.actionProvider.phone();
    }
    else if (message.includes('github') || message.includes('git')) {
      this.actionProvider.github();
    }
    else if (message.includes('linkdin')) {
      this.actionProvider.linkdin();
    }
    else if (message.includes('location') || message.includes('live') || message.includes('relocate') || message.includes('relocation') || message.includes('located')) {
      this.actionProvider.location();
    }
    else if (message.includes('salary')) {
      this.actionProvider.salary();
    }
    else if (message.includes('hello') || message.includes('hi')) {
      this.actionProvider.greet();
    }
    else {
      this.actionProvider.sorry();
    }
  }
}

export default MessageParser;
