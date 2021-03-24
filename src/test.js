function test() {
    for (let i = 0; i < 3; i++) {
        document.querySelector(".cls_sec:nth-child(10) ul li:nth-child(1)").click();
        let okdots = document.querySelector(".fp_content .fp-user-con .fp-dot-ok");
        okdots.click();
        if (okdots == undefined) {
            break;
        }
        let selectedOption = document.getElementsByName("start_time")[2].options;
        selectedOption.selectedIndex = 11;
        selectedOption[11].seleted = 'selected';
        if (selectedOption.length == 1) {
            break;
        }
        if (document.getElementsByClassName('imgcode').length) {
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
                result = num12 + num34;
            } else if (operator == '*') {
                result = num12 * num34;
            } else if (operator == '/') {
                result = num12 / num34;
            }
            document.getElementsByClassName('codeinput')[0].value = result;
        }

        // document.querySelector(".inited").click();
        let back = document.getElementsByClassName("dlg_close")[2];
        back.click();
        //运行前Deactivate breakpoints禁用断点
    }
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
}
