const entryLevelSelect = document.getElementById("entry-level");
const aLevelComboGroup = document.getElementById("a-level-combo-group");
const aLevelComboSelect = document.getElementById("a-level-combo");
const otherComboGroup = document.getElementById("other-combo-group");
const otherComboInput = document.getElementById("other-combo");

function handleLevelChange() {
  const isALevel = entryLevelSelect.value === "A-level";
  aLevelComboGroup.style.display = isALevel ? "block" : "none";

  if (!isALevel) {
    aLevelComboSelect.value = "";
    otherComboGroup.style.display = "none";
    otherComboInput.value = "";
  }
}

function handleCombinationChange() {
  const isOther = aLevelComboSelect.value === "other";
  otherComboGroup.style.display = isOther ? "block" : "none";

  if (!isOther) {
    otherComboInput.value = "";
  }
}

if (
  entryLevelSelect &&
  aLevelComboGroup &&
  aLevelComboSelect &&
  otherComboGroup &&
  otherComboInput
) {
  entryLevelSelect.addEventListener("change", handleLevelChange);
  aLevelComboSelect.addEventListener("change", handleCombinationChange);

  handleLevelChange();
  handleCombinationChange();
}