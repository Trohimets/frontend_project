function loggerCounter() {
    let count = 0;
    function increase() {
        count++;
      }
      return {
       showResult,
        increase,
      };
    function showResult() {
      console.log(count);
    }
  }
  
  const firstCount = new loggerCounter();
  firstCount.increase();
  firstCount.showResult();
  
  const secondCount = new loggerCounter();
  secondCount.increase();
  secondCount.increase();
  secondCount.showResult();
  
  const post = {
    title: "Обучение в Иннополисе",
    author: 'Alex Smirnov',
    tags: ["frontend", "js", "ts", "react"],
  };
  
  post.tags.push("Nodejs");
  console.log(post.tags);