//Loads Year Box with Years
window.onload = function Intializer() {
    var year_field = document.getElementById("year_box");
    for (var i = 1990; i < (new Date().getFullYear()) + 1; i++) {
        var opt = document.createElement("LI");
        opt.innerHTML = "<a href=\"#\" onclick=\"SelectorChange(this,'year'); MonthLoad(); DaysLoad(); ValidateDOB(); MonthsShow(); SubmitEnabler()\">" + i + "</a>";
        year_field.appendChild(opt);
    }
    document.getElementById("submit_btn").disabled = true;
}

function SelectorChange(object,type,no){
    document.getElementById(type+"_head_text").innerHTML = object.innerHTML;
    if(type=="month")
        document.getElementById(type+"_head_text").value = no;
}

function Viewer(validity,group,span,check)
{
    if(check)
    {
        group.className = "form-group has-success has-feedback";
        /*validity.innerHTML = "<p>Valid</p>";
        validity.firstChild.className = "validity_check";
        validity.style.color = "#3c763d";*/
        span.className = "glyphicon glyphicon-ok form-control-feedback";
    }
    else
    {
        group.className = "form-group has-error has-feedback";
        /*validity.innerHTML = "<p>Invalid</p>";
        validity.firstChild.className = "validity_check";
        validity.style.color = "#a94442";*/
        span.className = "glyphicon glyphicon-remove form-control-feedback";
    }
}


//First Name Validation
function ValidateName(name,validity,group,span) {
    validity.innerHTML = "<p></p>";
    if (name.value.charCodeAt(0) < 65 || name.value.charCodeAt(0) > 90 || name.value.length < 2) {
        Viewer(validity,group,span,false);
    } else {
        Viewer(validity,group,span,true);
    }
}

function CheckName(name) {
    if (name.charCodeAt(0) < 65 || name.charCodeAt(0) > 90 || name.length < 2)
        return false;
    return true;
}

//Last Name Validation
/*function ValidateLastName() {
    var name = document.getElementById("lname");
    var name_group = document.getElementById("lname_group");
    var validity = document.getElementById("lname_validity");
    validity.innerHTML = "<p></p>";
    if (name.value.charCodeAt(0) < 65 || name.value.charCodeAt(0) > 90 || name.value.length < 2) {
        name_group.className = "form-group has-error has-feedback";
        validity.innerHTML = "<p>Invalid</p>";
        validity.firstChild.className = "validity_check";
        validity.style.color = "#a94442";
    } else {
        name_group.className = "form-group has-success has-feedback";
        validity.innerHTML = "<p>Valid</p>";
        validity.firstChild.className = "validity_check";
        validity.style.color = "#3c763d";
    }
}


function CheckLastName() {
    var name = document.getElementById("lname").value;
    if (name.charCodeAt(0) < 65 || name.charCodeAt(0) > 90 || name.length < 2)
        return false;
    return true;
}*/

//Date of Births Validations & Loadings
function MonthLoad() {
    var months = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    };
    var month_field = document.getElementById("month_box");
    var year = document.getElementById("year_head_text").innerHTML;
    document.getElementById("month_head_text").innerHTML = "Month";
    var m = new Date().getMonth() + 1;
    var y = new Date().getFullYear();
    month_field.innerHTML = "";
    if (year == y) {
        for (var i = 1; i < m + 1; i++) {
            var opt = document.createElement("LI");
            opt.innerHTML = "<a href=\"#\" onclick=\"SelectorChange(this,'month'," + i + "); DaysLoad(); ValidateDOB(); DaysShow(); MonthsChange(); SubmitEnabler()\">" + months[i] + "</a>";
            month_field.appendChild(opt);
        }
    } else {
        for (var i = 1; i < 13; i++) {
            var opt = document.createElement("LI");
            opt.innerHTML = "<a href=\"#\" onclick=\"SelectorChange(this,'month'," + i + "); DaysLoad(); ValidateDOB(); DaysShow(); MonthsChange(); SubmitEnabler()\">" + months[i] + "</a>";
            month_field.appendChild(opt);
        }
    }
}

function MonthsShow() {
    document.getElementById('year_head').className = "btn btn-success dropdown-toggle";
    document.getElementById('month_head').style.visibility = "visible";
}

function MonthsChange() {
    if (document.getElementById('month_head_text').innerHTML != "Month")
        document.getElementById('month_head').className = "btn btn-success dropdown-toggle";
}

function DaysLoad() {
    var d = new Date().getDate();
    var day_field = document.getElementById("day_box");
    day_field.innerHTML = "";
    document.getElementById("day_head_text").innerHTML = "Day";
    var m = new Date().getMonth();
    var month = document.getElementById("month_head_text").value;
    var year = document.getElementById("year_head_text").innerHTML;
    var y = new Date().getFullYear();
    if (month == m + 1 && year == y) {
        for (var i = 1; i < d + 1; i++) {
            var opt = document.createElement("LI");
            opt.innerHTML = "<a href=\"#\" onclick=\"SelectorChange(this,'day'); ValidateDOB(); DaysChange(); SubmitEnabler();\">" + i + "</a>";
            day_field.appendChild(opt);
        }
    } else if (month == 2) {
        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
            for (var i = 1; i < 30; i++) {
                var opt = document.createElement("LI");
                opt.innerHTML = "<a href=\"#\" onclick=\"SelectorChange(this,'day'); ValidateDOB(); DaysChange(); SubmitEnabler();\">" + i + "</a>";
                day_field.appendChild(opt);
            }
        } else {
            for (var i = 1; i < 29; i++) {
                var opt = document.createElement("LI");
                opt.innerHTML = "<a href=\"#\" onclick=\"SelectorChange(this,'day'); ValidateDOB(); DaysChange(); SubmitEnabler();\">" + i + "</a>";
                day_field.appendChild(opt);
            }
        }

    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        for (var i = 1; i < 32; i++) {
            var opt = document.createElement("LI");
            opt.innerHTML = "<a href=\"#\" onclick=\"SelectorChange(this,'day'); ValidateDOB(); DaysChange(); SubmitEnabler();\">" + i + "</a>";
            day_field.appendChild(opt);
        }
    } else {
        for (var i = 1; i < 31; i++) {
            var opt = document.createElement("LI");
            opt.innerHTML = "<a href=\"#\" onclick=\"SelectorChange(this,'day'); ValidateDOB(); DaysChange(); SubmitEnabler();\">" + i + "</a>";
            day_field.appendChild(opt);
        }
    }
}

function DaysChange() {
    if (document.getElementById('day_head_text').innerHTML != "Day")
        document.getElementById('day_head').className = "btn btn-success dropdown-toggle";
}

/*function DateChange()
{
	if(document.getElementById("day_box").style.visibility != "hidden" && document.getElementById("month_box").style.visibility != "hidden" && document.getElementById("year_box").style.visibility != "hidden")
	{
		if(document.getElementById('day_box').value != "Day")
			document.getElementById('day_box').style.borderColor = "#3c763d";
		if(document.getElementById('month_box').value != "Month")
			document.getElementById('month_box').style.borderColor = "#3c763d";
		if(document.getElementById('year_box').value != "Year")
			document.getElementById('year_box').style.borderColor = "#3c763d";
	}
}*/

function DaysShow() {
    document.getElementById('day_head').style.visibility = "visible";
}

function ValidateDOB() {
    var yearHead = document.getElementById("year_head");
    var monthHead = document.getElementById("month_head");
    var dayHead = document.getElementById("day_head");
    var year_input = document.getElementById("year_input");
    var dob_validity = document.getElementById("dob_validity");
    if (DOB_Check()) {
        Viewer(dob_validity,document.getElementById("dob_group"),document.getElementById("dob_check_span"),true);
        yearHead.className = "btn btn-success dropdown-toggle";
        monthHead.className = "btn btn-success dropdown-toggle";
        dayHead.className = "btn btn-success dropdown-toggle";
        //document.getElementById("dob_group").className = "form-group has-success has-feedback";
    } else {
        if (dayHead.style.visibility != "hidden" && monthHead.style.visibility != "hidden")
            Viewer(dob_validity,document.getElementById("dob_group"),document.getElementById("dob_check_span"),false);
        if (document.getElementById("day_head_text").innerHTML == "Day" && dayHead.style.visibility != "hidden") {
            dayHead.className = "btn btn-danger dropdown-toggle";
            if (document.getElementById("month_head_text").innerHTML == "Month") {
                monthHead.className = "btn btn-danger dropdown-toggle";
            }
        } else if (document.getElementById("month_head_text").innerHTML == "Month" && monthHead.style.visibility != "hidden") {
            monthHead.className = "btn btn-danger dropdown-toggle";
        }
    }
}

function DOB_Check() {
    if (document.getElementById("year_head_text").innerHTML != "Year" && document.getElementById("month_head_text").innerHTML != "Month" && document.getElementById("day_head_text").innerHTML != "Day")
        return true;
    return false;
}



//E-mail Validation
function ValidateEmail() {
    var email = document.getElementById("email");
    var validity = document.getElementById("email_validity");
    var email_group = document.getElementById("email_group");
    if (/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(email.value)) {
        Viewer(validity,email_group,document.getElementById("email_check_span"),true);
    } else {
        Viewer(validity,email_group,document.getElementById("email_check_span"),false);
    }
}

function CheckEmail() {
    var email = document.getElementById("email").value;
    if (/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(email)) {
        if (email != "")
            return true;
    }
    return false;
}



//Password & RePassword Validations
function ValidatePass() {
    var pass = document.getElementById("pass");
    var pass_group = document.getElementById("pass_group");
    var validity = document.getElementById("pass_validity");
    var strength = document.getElementById("pass_strength");
    strength.style.width="100%";
    if (!(pass.value.length < 8)) {
        if (/[0-9]/.test(pass.value) && (/[@~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/).test(pass.value)) {
            Viewer(validity,pass_group,document.getElementById("pass_check_span"),true);
            document.getElementById("pass_strength").className = "progress-bar progress-bar-success";
            document.getElementById("pass_strength").innerHTML = "Strong";
        } else if (/[0-9]/.test(pass.value) || (/[@~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/).test(pass.value)) {
            Viewer(validity,pass_group,document.getElementById("pass_check_span"),true);
            strength.className = "progress-bar progress-bar-info";
            strength.innerHTML = "Meduim";
        } else {
            Viewer(validity,pass_group,document.getElementById("pass_check_span"),false);
            strength.className = "progress-bar progress-bar-danger";
            strength.innerHTML = "Invalid";
        }
    } else {
        Viewer(validity,pass_group,document.getElementById("pass_check_span"),false);
        document.getElementById("pass_strength").className = "progress-bar progress-bar-danger";
        document.getElementById("pass_strength").innerHTML = "Invalid";
    }
}


function ValidateRePass() {
    var repass = document.getElementById("re-pass");
    var repass_group = document.getElementById("repass_group");
    var validity = document.getElementById("re-pass_validity");
    if (repass.value == "")
        return;
    if (/[0-9]/.test(repass.value) && document.getElementById("pass").value == repass.value) {
        Viewer(validity,repass_group,document.getElementById("repass_check_span"),true);
    } else {
        Viewer(validity,repass_group,document.getElementById("repass_check_span"),false);
    }
}


function CheckPass() {
    if (document.getElementById("pass").value.length > 7 && /[0-9]/.test(document.getElementById("pass").value) && document.getElementById("pass").value == document.getElementById("re-pass").value)
        return true;
    return false;
}


//Success Greener for the Gender and Music Boxes
function SuccessGreener(object){
    if(object.firstElementChild.checked)
        object.className = "btn btn-success active";
    else
        object.className = "btn btn-success";
}

//Invalider for the Gender and Music Boxes
function Invalider(object){
    object.className = "btn btn-danger";
}

//Gender Validation
function GenderValidation() {
    var validity = document.getElementById("gender_validity");
    if (document.getElementById("gender_Male").checked || document.getElementById('gender_Female').checked) {
        Viewer(validity,document.getElementById("gender_group"),document.getElementById("gender_check_span"),true);
        SuccessGreener(document.getElementById('gender_MaleHead'));
        SuccessGreener(document.getElementById('gender_FemaleHead'));
        return;
    }
    validity.innerHTML = "<p>Invalid</p>";
    validity.firstChild.className = "validity_check";
    validity.style.color = "#a94442";
    return;
}

function CheckGender() {

    var radios = document.getElementsByName('gender');
    var formValid = false;
    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked)
            formValid = true;
        i++;
    }
    if (!formValid)
        return false;
    return formValid;
}


//Music Valdiation
function MusicValidation() {
    var validity = document.getElementById("music_validity");
    if (CheckMusic()) {
        Viewer(validity,document.getElementById("music_group"),document.getElementById("music_check_span"),true);
        for (var i = 0; i<6; i++)
            SuccessGreener(document.getElementById('music'+i));
        return;
    }
    Viewer(validity,document.getElementById("music_group"),document.getElementById("music_check_span"),false);
    for (var i = 0; i<6; i++)
        Invalider(document.getElementById('music'+i));
    return;
}


function CheckMusic() {

    var boxes = document.getElementsByName('music');
    var formValid = false;
    var i = 0;
    while (!formValid && i < boxes.length) {
        if (boxes[i].checked)
            formValid = true;
        i++;
    }
    return formValid;
}


//ProgressBar Calculations
function ProgressBarAdder() {
    var progress = document.getElementById("ProgressBar");
    var progress_value = 0;
    if (CheckName(document.getElementById("fname").value))
        progress_value += 12.5;
    if (CheckName(document.getElementById("lname").value))
        progress_value += 12.5;
    if (DOB_Check())
        progress_value += 12.5;
    if (CheckEmail())
        progress_value += 12.5;
    if (CheckPass())
        progress_value += 25;
    if (CheckGender())
        progress_value += 12.5;
    if (CheckMusic())
        progress_value += 12.5;
    progress.style.width = progress_value + "%";
    progress.innerHTML = progress.style.width;
    if (progress_value == 100)
        progress.className = "progress-bar progress-bar-success progress-bar-striped active";
    else
        progress.className = "progress-bar progress-bar-striped active";
}

//Resets Form
function form_reseter() {
    location.reload();
}

//Submit Button Enabler
function SubmitEnabler() {
    if (CheckName(document.getElementById("fname").value) && CheckName(document.getElementById("lname").value) && DOB_Check() && CheckEmail() && CheckPass() && CheckGender() && CheckMusic())
        document.getElementById("submit_btn").disabled = false;
    else
        document.getElementById("submit_btn").disabled = true;
    ProgressBarAdder();
}