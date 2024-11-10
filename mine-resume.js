var _a, _b, _c, _d;
var profileImage = document.querySelector('.imgBox img');
var resumeData = JSON.parse(localStorage.getItem("resumeData") || '{}');
console.log("hello");
// Function to set text content
function setText(selector, text) {
    var element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}
function createListItem(year, degree, institute) {
    return "\n        <li>\n            <h5>".concat(year, "</h5>\n            <h4>").concat(degree, "</h4>\n            <h4>").concat(institute, "</h4>\n        </li>\n    ");
}
function createExperienceItem(years, jobTitle, companyDesc) {
    return "\n        <div class=\"box\">\n            <div class=\"year_company\">\n                <h5>".concat(years, "</h5>\n            </div>\n            <div class=\"text\">\n                <h4>").concat(jobTitle, "</h4>\n                <p>").concat(companyDesc, "</p>\n            </div>\n        </div>\n    ");
}
function createSkillItem(skill, proficiency) {
    return "\n        <div class=\"box\">\n            <h4>".concat(skill, "</h4>\n            <div class=\"percent2\">\n                <div style=\"width: ").concat(proficiency, "%;\"></div>\n            </div>\n        </div>\n    ");
}
if (resumeData.profileImage) {
    profileImage.src = resumeData.profileImage;
}
setText("#profileName", "".concat(((_a = resumeData.aboutMe) === null || _a === void 0 ? void 0 : _a.firstName) || '', " ").concat(((_b = resumeData.aboutMe) === null || _b === void 0 ? void 0 : _b.lastName) || ''));
setText("#profileDesignation", ((_c = resumeData.aboutMe) === null || _c === void 0 ? void 0 : _c.designation) || '');
setText("#profileDescription", ((_d = resumeData.aboutMe) === null || _d === void 0 ? void 0 : _d.yourself) || '');
var contactInfo = resumeData.contactInfo || {};
setText("#contactPhone", contactInfo.mobileNumber || '');
setText("#contactEmail", contactInfo.email || '');
setText("#contactLinkedIn", contactInfo.linkedin || '');
setText("#contactGithub", contactInfo.github || '');
setText("#contactAddress", contactInfo.address || '');
var educationList = document.querySelector("#educationList");
if (educationList && Array.isArray(resumeData.education)) {
    educationList.innerHTML = resumeData.education.map(function (edu) {
        return createListItem(edu.year, edu.degree, edu.institute);
    }).join('');
}
var languagesList = document.querySelector("#languageList");
if (languagesList && Array.isArray(resumeData.languages)) {
    languagesList.innerHTML = resumeData.languages.map(function (lang) {
        return "<li>\n            <span class=\"text\">".concat(lang.language, "</span>\n            <span class=\"percent\">\n                <div style=\"width: ").concat(lang.proficiency, "%;\"></div>\n            </span>\n        </li>");
    }).join('');
}
var experienceList = document.querySelector("#experienceList");
if (experienceList && Array.isArray(resumeData.experience)) {
    experienceList.innerHTML = resumeData.experience.map(function (exp) {
        return createExperienceItem(exp.years, exp.jobTitle, exp.companyDesc);
    }).join('');
}
var skillsList = document.querySelector("#skillsList");
if (skillsList && Array.isArray(resumeData.skills)) {
    skillsList.innerHTML = resumeData.skills.map(function (skill) {
        return createSkillItem(skill.skill, skill.level);
    }).join('');
}
function downloadResume() {
    var resumeElement = document.querySelector('.container');
    if (!resumeElement) {
        console.error('Resume container not found!');
        return;
    }
    var options = {
        margin: 0.5,
        filename: 'My_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'in', format: "a4", orientation: 'portrait' },
    };
    window.html2pdf().from(resumeElement).set(options).save();
}
var downloadButton = document.getElementById('downloadResume');
if (downloadButton) {
    downloadButton.addEventListener('click', downloadResume);
}
else {
    console.error('Download button not found!');
}
