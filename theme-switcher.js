const switchButton = document.getElementById('button-switcher');
const bgColor = document.getElementsByTagName('body')[0];
const gText = document.getElementById('greetings-text');


function switchTheme() {
    if(bgColor.classList.contains('light')) {
        gText.style.color = "var(--light)";
        changeText();
        switchButton.style.transform = "translate(20px, -30px)";
        bgColor.classList.remove('light')
        bgColor.classList.add('dark');
    } else {
        switchButton.style.transform = "translate(-20px, -30px)";
        gText.style.color = "var(--dark)";
        changeText();
        bgColor.classList.remove('dark')
        bgColor.classList.add('light');
    }
};


function changeText() {
  let dur = 250;
  let animation = gText.animate([
        { opacity: '1' },
        { opacity: '0' }
        ], { 
        duration: dur,
        });
      
      animation.onfinish = function() {
        if(gText.textContent.includes('Good day!')) {
          gText.textContent = "Good night!";
          gText.animate([
        { opacity: '0' },
        { opacity: '1' }
      ], { 
        duration: dur,
      });
        } else if(gText.textContent.includes('Good night!')) {
          gText.textContent = "Good day!";
          gText.animate([
        { opacity: '0' },
        { opacity: '1' }
      ], { 
        duration: dur,
      });
        }
      };
}