// a. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// b. Get all the countries from Asia continent /region using Filter function
// c. Get all the countries with a population of less than 2 lakhs using Filter function
// d. Print the following details name, capital, flag, using forEach function
// e. Print the total population of countries using reduce function
// f. Print the country that uses US dollars as currency.

// a. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).


const request = new XMLHttpRequest()
    request.open("GET","https://restcountries.com/v3.1/all",true)
    request.send()
    request.onload=function () {
        datas = request.response
        results = JSON.parse(datas)
        console.log(results);
   
    }


//b. Get all the countries from Asia continent /region using Filter function

    const req = new XMLHttpRequest()
    req.open("GET","https://restcountries.com/v3.1/all",true)
    req.send()
    req.onload=function () {
        data = req.response
        result = JSON.parse(data)
        let res = result.filter((ele)=>ele.region ==="Asia");
        res.forEach((element) =>console.log(element.name.common));
    }

// c. Get all the countries with a population of less than 2 lakhs using Filter function

    const req1 = new XMLHttpRequest()
    req1.open("GET","https://restcountries.com/v3.1/all",true)
    req1.send()
    req1.onload=function () {
        data1 = req1.response
        result1 = JSON.parse(data1)
        let res1 = result1.filter((ele)=>ele.population < 200000);
        res1.forEach((element) =>console.log(element.name.common));
    }


// d. Print the following details name, capital, flag, using forEach function

    const req2 = new XMLHttpRequest()
    req2.open("GET","https://restcountries.com/v3.1/all",true)
    req2.send()
    req2.onload=function () {
        data2 = req2.response
        result2 = JSON.parse(data2)
        result2.forEach((element) =>console.log(`Name : ${element.name.common} Capital : ${element.capital} 
                            Flag : ${element.flags.png}`));
    }


// d. Print the total population of countries using reduce function

    const req3 = new XMLHttpRequest()
    req3.open("GET","https://restcountries.com/v3.1/all",true)
    req3.send()
    req3.onload=function () {
        data3 = req3.response
        result3 = JSON.parse(data3)
        let total = result3.map((element)=>element.population)
        let res3 = total.reduce((sum,iter)=>{
            return sum+iter
        },0);
        console.log(`Total-Population is = ${res3}`);
        
    }

// f. Print the country that uses US dollars as currency.

    const req4 = new XMLHttpRequest()
    req4.open("GET","https://restcountries.com/v3.1/all",true)
    req4.send()
    req4.onload=function () {
        data4 = req4.response
        result4 = JSON.parse(data4)
        let res4 = result4.filter((ele)=>ele.currencies?.USD?.name ==="United States dollar");
        res4.forEach((element) =>console.log(`Country : ${element.name.common} `));
    }

