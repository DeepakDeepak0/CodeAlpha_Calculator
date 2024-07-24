const Screen = document.querySelector("#screen");

const onPickValue = (val) => {
  Screen.value += val;
};

const onEvaluate = () => {
  try {
    const expression = Screen.value;
    const ans = eval(expression);
    Screen.value = ans;
  } catch {
    Screen.value = "error";
    setTimeout(function displayError() {
      Screen.value = null;
    }, 2000);
  }
};

const onClear = () => {
  Screen.value = "";
};

const onLastDigitRemove = () => {
  if (Screen.value.length > 0) {
    Screen.value = Screen.value.slice(0, -1);
  }
};

const onPickValueWithValid = (val) => {
  if (Screen.value.length > 0) {
    onPickValue(val);
  }
};
