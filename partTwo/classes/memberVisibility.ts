// Member Visibility

// public (default)
    // Allowed to be accessed by anybody, anywhere
// protected
    // Allowed to be accessed only by the class itself and its subclasses
// private
    // Allowed to be accessed only by the class itself

    class Base {
        isPublicImplicit = 0;
        public isPublicExplicit = 1;
        protected isProtected = 2;
        private isPrivate = 3;
        #truePrivate = 4;
    }
    
    class subclass extends Base {
        example(){
            this.isPublicImplicit;
            this.isPublicExplicit;
            this.isProtected;
    
            this.isPrivate;
            // Property 'isPrivate' is private and only 
            // accessible within class 'Base'
    
            this.#truePrivate;
            // Property '#truePrivate' is not accessible 
            // outside class 'Base' because it has a private identifier.
        }
    }
    
    new subclass().isPublicImplicit; // Ok
    new subclass().isPublicExplicit; // Ok
    
    new subclass().isProtect;
    // Property 'isProtect' does not exist on type 'subclass'
    
    new subclass().isPrivate;
    // Property 'isPrivate' is private and only accessible within class 'Base'
    
    // The key difference between TypeScript’s member visibilities and 
    // JavaScript’s true private declarations is that TypeScript’s 
    // exist only in the type system, while JavaScript’s also exist at runtime

    // Static Field Modifiers

// TypeScript supports using the static keyword on its own
// and/or with readonly and/or with one of the visibility keywords. 
// When combined,the visibility keyword comes first, then static, then readonly

class Question{
    protected static readonly answer: "bash";
    protected static readonly prompt = "What's an ogre's favorite programming language?"
    quess(getAnswer: (prompt: string) => string){
        const answer = getAnswer(Question.prompt)

        if(answer === Question.answer){
            console.log("You got it");
        } else {
            console.log("Try again...");
        }
    }
}

Question.answer;
// Property 'answer' is protected and only accessible within 
// class 'Question' and its subclasses