//understand the concept of fetch in console
async function test() {
    console.log("this is a asynchronous function and we want to fetch data from api");
    const response=await fetch("./student.json");
    console.log(response.status);
    const stud =await response.json();
    return stud;
    console.log("finally data fetch");
}
test().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log("error");
})