var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);
function consoleWithNoSource(...params) { setTimeout(console.log.bind(console, ...params)); }
//tagDropdown
Array.prototype.forEach.call(document.querySelectorAll('input,.ant-select-selection-selected-value,textarea,.ant-select-enabled'), function (e, i) {
    if (e.id && e.firstChild &&
        e.firstChild.getAttribute &&
        e.firstChild.getAttribute('role') == 'combobox') {
        let value = e.innerText.split(/\r?\n/)
        value.pop()
        value = value.join(",")
        if (value !== "") {
            consoleWithNoSource(`${e.id},tagDropdown,"${value}"`)
        }
    }
    if ((e.type == "text" || e.type == "textarea") && e.value && e.id && e.value.indexOf("-") == -1 && !e.disabled && $(e).is(":visible")) {
        consoleWithNoSource(`${e.id},text,"${e.value}"`)
    }
    ////////////////GOOGLE API
    if ((e.type == "text" || e.type == "textarea") && e.value && !e.id && e.className.indexOf("ant-calendar-picker-input") == -1 && e.value.indexOf("-") == -1) {
        let id = $(e).parentsUntil('[id]').closest('*[id]')[0].id
        consoleWithNoSource(`${id},text,${e.value}`)
    }
    if (e.type == "text" && e.value && !e.id && e.className.indexOf("ant-calendar-picker-input") == 0) {
        let datePickerId = $(e).parentsUntil('[id]').closest('*[id]')[0].id
        consoleWithNoSource(`${datePickerId},datePicker,${e.value}`)
    }
    if (e.type == 'checkbox' && e.checked && e.id) {
        consoleWithNoSource(`${e.id},checkbox,${e.id}`)
    }
    if (e.type == 'checkbox' && e.checked && !e.id) {
        let checkboxId = $(e).parentsUntil('[id]').closest('*[id]')[0].id
        consoleWithNoSource(`${checkboxId},checkbox,${e.value}`)
    }
    if (e.type == 'radio' && e.checked) {
        let radio_id = e.closest("[id]").id;
        consoleWithNoSource(`${radio_id},${e.type},${e.value}`)
    }
    if (e.tagName == 'DIV' && e.title && e.title !== 'Hong Kong +852') {
        let dropDownId = $(e).parentsUntil('[id]').closest('*[id]')[0].id
        let value = e.title
        consoleWithNoSource(`${dropDownId},dropdown,${value}`)
    }
});
consoleWithNoSource(`next_btn,button,next_btn`)