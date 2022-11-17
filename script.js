

var txt = document.createElement("div");
    txt.setAttribute("class","grid-container");
        console.log(10);
        txt.innerHTML = 10;
        setTimeout(()=> {
            console.log(9);
            txt.innerHTML = 9;
            setTimeout(()=> {
                console.log(8);
                txt.innerHTML = 8;
                setTimeout(()=> {
                    console.log(7);
                    txt.innerHTML = 7;
                    setTimeout(()=> {
                        console.log(6);
                        txt.innerHTML = 6;
                        setTimeout(()=>{
                            console.log(5);
                            txt.innerHTML = 5;
                            setTimeout(()=>{
                                console.log(4);
                                txt.innerHTML = 4;
                                setTimeout(()=> {
                                    console.log(3);
                                    txt.innerHTML = 3;
                                    setTimeout(()=> {
                                        console.log(2);
                                        txt.innerHTML = 2;
                                        setTimeout(()=> {
                                            console.log(1);
                                            txt.innerHTML = 1;
                                            setTimeout(()=> {
                                                console.log("Happy Independence Day")
                                                txt.innerHTML = `<b>Happy Independence Day</b>
                                                 <img class="independence day"src="happy.jpg" alt="independence"></img>`
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
  document.body.append(txt);
