const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const textbox  = $('#text_preview_placeholder');


output.innerHTML = textbox.css("font-size");

slider.oninput = function()
{
  output.innerHTML = this.value + "px";
  textbox.css("font-size", this.value + "px");
}

function Init()
{
  slider.value = 14;
  output.innerHTML = "14px";
  textbox.css("font-size", output.innerHTML);
  textbox.css("font-family", "나눔스퀘어_ac");
}

// $(document).ready(function()
// {
//   $(".option_close_btn").click(()=>
//   {
//     if ($(".option_close_btn font").text() === "❯")
//     {
//       $(".font_option_wrapper").css("width", "20%");
//       $(".description_wrapper").css("display", "block");
//       $(".option_close_btn font").text("❮");
//     }
//     else
//     {
//       $(".description_wrapper").css("display", "none");
//       $(".font_option_wrapper").css("width", "0%");
//       $(".option_close_btn font").text("❯");
//     }
//   });
// });

