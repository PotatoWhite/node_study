
// function 으로 정의되는 경우 해당 relationship1이라는 오브젝트가 생성되는 시점과 별개로 실행됨
// () 리터럴을 사용하는 경우 inline함수처럼 객체의 생성중(아직생성이 완료가 되지 않았을 때) 에 뭔가 linking 하는 것으로 생각됨

let relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function() {
        this.friends.forEach(elem => console.log(this.name, elem))
    }
};

relationship1.logFriends();

const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: () => {
        this.friends.forEach(friend => console.log(this.name, friend));
    }
};

relationship2.logFriends();
