title = document.querySelectorAll("title")[0]

title.textContent = title.textContent.replace("Blue", "Red")


document.body.innerHTML = document.body.innerHTML.replace(/Blue/g, 'Red');
document.body.innerHTML = document.body.innerHTML.replace(/TBA/g, 'TRA');

var elements = document.querySelectorAll('.navbar-default');

// Loop over the items in the array
elements.forEach(function(el){
  //Do the replace on the element
  el.style.backgroundColor = "#b53f3f"
  el.style.borderColor = "#9c3636"
});

document.styleSheets.crossOrigin = "anonymous"

function getCSSRule(ruleName) {
    ruleName = ruleName.toLowerCase();
    var result = null;
    var find = Array.prototype.find;

    find.call(document.styleSheets, styleSheet => {
        result = find.call(styleSheet.cssRules, cssRule => {
            return cssRule instanceof CSSStyleRule 
                && cssRule.selectorText.toLowerCase() == ruleName;
        });
        return result != null;
    });
    return result;
}

var hover_navbar = getCSSRule("a:hover")
hover_navbar.style.backgroundColor = "#7e1a1a"