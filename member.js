function skillsMember() {
  var member = document.getElementById("member").value;
  var skills = document.getElementById("skills").value;
  var memberSkills = document.getElementById("memberSkills");
  var memberSkillsArray = memberSkills.value.split("\n");
  var found = false;
  for (var i = 0; i < memberSkillsArray.length; i++) {
    if (memberSkillsArray[i].split(":")[0] == member) {
      memberSkillsArray[i] = member + ":" + skills;
      found = true;
    }
  }
  if (!found) {
    memberSkillsArray.push(member + ":" + skills);
  }
  memberSkills.value = memberSkillsArray.join("\n");
  document.getElementById("member").value = "";
  document.getElementById("skills").value = "";
}