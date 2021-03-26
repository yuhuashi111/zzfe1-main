async function navClick() {
    return new Promise(
        resolve => {
            document.querySelector(".cls_sec:nth-child(10) ul li:nth-child(1)").click();
            setTimeout(() => resolve("111"), 1500);
        }

    )
}
async function okdotsClick() {
    return new Promise(
        resolve => {
            // for (let i = 0; i < 3; i++) {
            // let okdots = document.querySelector(".fp_content .fp-user-con .fp-dot-ok");
            // 换成用getElementsByClassName 
            let okdots = document.getElementsByClassName('fp-dot-ok')[4];
            if (okdots == undefined) {
                // break;
                return;
            } else if (okdots) {
                okdots.click();
            }

            // let back = document.getElementsByClassName("dlg_close")[2];
            // back.click();
            //运行前Deactivate breakpoints禁用断点

            // }
            setTimeout(() => resolve("111"), 1000);
        }
    );

    // for (let i = 0; i < 3; i++) {
    //     document.querySelector(".cls_sec:nth-child(10) ul li:nth-child(2)").click();
    //     document.querySelector(".fp_content .fp-user-con .fp-dot-ok").click();
    //     document.getElementsByName("start_time")[2].options.selectedIndex = 11
    //     // document.querySelector(".inited").click();
    //     //运行前Deactivate breakpoints禁用断点
    // }
    // for (let i = 0; i < 3; i++) {
    //     document.querySelector(".cls_sec:nth-child(12) ul li:nth-child(1)").click();
    //     document.querySelector(".fp_content .fp-user-con .fp-dot-ok").click();
    //     document.getElementsByName("start_time")[2].options.selectedIndex = 11
    //     // document.querySelector(".inited").click();
    //     //运行前Deactivate breakpoints禁用断点
    // }
    // for (let i = 0; i < 3; i++) {
    //     document.querySelector(".cls_sec:nth-child(12) ul li:nth-child(2)").click();
    //     document.querySelector(".fp_content .fp-user-con .fp-dot-ok").click();
    //     document.getElementsByName("start_time")[2].options.selectedIndex = 11
    //     // document.querySelector(".inited").click();
    //     //运行前Deactivate breakpoints禁用断点
    // }

    // for (let i = 0; i < 3; i++) {
    //     document.querySelector(".cls_sec:nth-child(12) ul li:nth-child(3)").click();
    //     document.querySelector(".fp_content .fp-user-con .fp-dot-ok").click();
    //     document.getElementsByName("start_time")[2].options.selectedIndex = 11
    //     // document.querySelector(".inited").click();
    //     //运行前Deactivate breakpoints禁用断点
    // }
    // document.getElementsByClassName('fp-dot')[4];  //右数第一排靠窗
    // document.getElementsByClassName('fp-dot')[10]; //右数第二排靠窗
    // document.getElementsByClassName('fp-dot')[21]; 
}
async function selectedOptionClick() {
    return new Promise(
        resolve => {
            let time = document.getElementsByName("start_time")[2];
            if (time) {
                console.log("tttt");
            }
            let selectedOption = document.getElementsByName("start_time")[2].options;
            if (selectedOption) {
                selectedOption.selectedIndex = 1;
                selectedOption[1].seleted = 'selected';
                if (selectedOption.length == 1) {
                    // break;
                    return;
                }
            }
            setTimeout(() => resolve("111"), 1000);
        }
    )
}
async function imgCodeClick() {
    return new Promise(
        resolve => {
            console.log("1111");
            if (document.getElementsByClassName('imgcode') && document.getElementsByClassName('imgcode').length) {
                var num1 = document.getElementsByClassName('imgcode')[0].currentSrc.slice(-5, -4);
                var num2 = document.getElementsByClassName('imgcode')[1].currentSrc.slice(-5, -4);
                var num12 = parseInt(num1 + num2);
                var num3 = document.getElementsByClassName('imgcode')[2].currentSrc.slice(-5, -4);
                var num4 = document.getElementsByClassName('imgcode')[3].currentSrc.slice(-5, -4);
                var num34 = parseInt(num3 + num4);
                var operator = document.getElementsByClassName('codespan')[0].innerText;
                let result;
                if (operator == '+') {
                    result = num12 + num34;
                } else if (operator == '-') {
                    result = num12 - num34;
                } else if (operator == '*') {
                    result = num12 * num34;
                } else if (operator == '/') {
                    result = num12 / num34;
                }
                document.getElementsByClassName('codeinput')[0].value = result;
            }
            setTimeout(() => resolve("111"), 1000);
        })
}
async function confirmClick1() {
    return new Promise(
        resolve => {
            let confirm = document.querySelector(".inited");
            if (confirm) {
                confirm.click();
            }
            setTimeout(() => resolve("111"),1000);
        })
}
async function confirmClick2() {
    return new Promise(
        resolve => {
            let confirm = document.querySelector(".inited");
            if (confirm) {
                confirm.click();
            }
            setTimeout(() => resolve("111"), 1000);
        })
}
async function test() {
    await navClick();
    await okdotsClick();
    await selectedOptionClick();
    await confirmClick1();
    await imgCodeClick();
}