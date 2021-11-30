//アップロード時に選択したファイルの情報を取得
$('input').on('change', function () {
        var file = $(this).prop('files')[0];
        $('.custom-file-label').text(file.name);
});

//文字入力時にdisabled解除
const formControl = document.querySelectorAll('.form-control');
const button = document.querySelector('.p-genric-btn--secondary');
let select = document.querySelectorAll('.p-select-body');

//console.log(formControl);
//console.log(button);
//console.log(inputChange);

formControl.forEach(formControl => {
  formControl.addEventListener('keyup', (e) => {

    if (1 <= e.target.value.length) {
      button.disabled = false;
      button.classList.remove('js-button');
    }
  });
});

//select選択時にdisabled解除
document.addEventListener('DOMContentLoaded', function () {

  const button = document.querySelector('.p-genric-btn--secondary');
  const formControls = document.querySelectorAll('.form-control');

  const formControlsCheck = () => {
    button.disabled = [...formControl].some(({ value }) => !value);
    button.disabled = false;
    button.classList.remove('js-button');
  }

  formControls.forEach(elm => {
    elm.addEventListener('change', formControlsCheck);
  });

  // 画面初期表示でのbuttonの活性・非活性を設定する。
  formControlsCheck(disabled);
});

//form step-bar
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});


function updateFormSteps() {

  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}


function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width = ((progressActive.length - 1) / (progressSteps.length -1)) *100 + "%";
}

//table-add-delete　table追加、削除
/* const BtnAdd = document.querySelector(".btn-add");
const BtnDelete = document.querySelector(".circle-ph-x");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
  
BtnAdd.addEventListener("click", Add);
tableEl.addEventListener("click", Delete);

function Add(e) {
        e.preventDefault();
        tbodyEl.innerHTML += `
            <tr>
            <td><div class="col-12 u-col-p-none"><input type="text" class="form-control" placeholder="例）株式会社◯◯◯◯◯◯" name="text" value=""></div></td>
            <td><div class="col-12 u-construction u-col-p-none"><input type="text" class="form-control" placeholder="2021" name="text" value=""><span>年度</span></td>
            <td><div class="table-select--icon"><select class="form-control table-select is-empty" table-select" name="select">
                <option value="" selected>選択</option>
                <option value="1">北海道</option>
                <option value="2">青森県</option>
                <option value="3">岩手県</option>
                <option value="4">宮城県</option>
                <option value="5">秋田県</option>
                <option value="6">山形県</option>
                <option value="7">福島県</option>
                <option value="8">茨城県</option>
                <option value="9">栃木県</option>
                <option value="10">群馬県</option>
                <option value="11">埼玉県</option>
                <option value="12">千葉県</option>
                <option value="13">東京都</option>
                <option value="14">神奈川県</option>
                <option value="15">新潟県</option>
                <option value="16">富山県</option>
                <option value="17">石川県</option>
                <option value="18">福井県</option>
                <option value="19">山梨県</option>
                <option value="20">長野県</option>
                <option value="21">岐阜県</option>
                <option value="22">静岡県</option>
                <option value="23">愛知県</option>
                <option value="24">三重県</option>
                <option value="25">滋賀県</option>
                <option value="26">京都府</option>
                <option value="27">大阪府</option>
                <option value="28">兵庫県</option>
                <option value="29">奈良県</option>
                <option value="30">和歌山県</option>
                <option value="31">鳥取県</option>
                <option value="32">島根県</option>
                <option value="33">岡山県</option>
                <option value="34">広島県</option>
                <option value="35">山口県</option>
                <option value="36">徳島県</option>
                <option value="37">香川県</option>
                <option value="38">愛媛県</option>
                <option value="39">高知県</option>
                <option value="40">福岡県</option>
                <option value="41">佐賀県</option>
                <option value="42">長崎県</option>
                <option value="43">熊本県</option>
                <option value="44">大分県</option>
                <option value="45">宮崎県</option>
                <option value="46">鹿児島県</option>
                <option value="47">沖縄県</option>
                </select></div></td>
            <td><div class="col-12 u-col-p-none">
            <input type="text" class="form-control" placeholder="例）〇〇〇〇〇〇工事" name="text" value=""></div></td>
            <td><div class="input-group p-radio-group"><div class="custom-control custom-radio custom-control-inline"><input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"><label class="custom-control-label u-label-p-none" for="customRadioInline1">有</label></div><div class="custom-control custom-radio custom-control-inline"><input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"><label class="custom-control-label" for="customRadioInline2">無</label></div></div></td>
            <td td-delete-btn="p-delete-btn"><button class="btn-delete"><i class="circle-ph-x ph-x"></i></button></td>
            </tr>            
        `;
      }

      function Delete(e) {
        if (!e.target.classList.contains("circle-ph-x")) {
          return;
        }

        const btn = e.target;
        btn.closest("tr").remove();
      }
 */