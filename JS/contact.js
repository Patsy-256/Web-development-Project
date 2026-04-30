// Toggle other combination field in admissions form
function toggleOtherField() {
    var select = document.getElementById('subject-combo');
    var otherField = document.getElementById('other-combo-group');
    if (select.value === 'other') {
        otherField.style.display = 'block';
    } else {
        otherField.style.display = 'none';
    }
}