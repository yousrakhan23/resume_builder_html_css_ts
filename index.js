var _a;
// Selecting form fields
var firstName = document.querySelector('input[type="text"]:nth-of-type(1)');
var lastName = document.querySelector('#lastName');
var designation = document.querySelector('#designation');
var yourself = document.querySelector('textarea');
var mobileNumber = document.querySelector('#phoneNumber');
var email = document.querySelector('#email');
var linkedin = document.querySelector('#linkedin');
var github = document.querySelector('#github');
var address = document.querySelector('#address');
var eduYear1 = document.querySelector('#edu-year-1');
var eduDegree1 = document.querySelector('#edu-degree-1');
var eduInstitute1 = document.querySelector('#edu-institute-1');
var eduYear2 = document.querySelector('#edu-year-2');
var eduDegree2 = document.querySelector('#edu-degree-2');
var eduInstitute2 = document.querySelector('#edu-institute-2');
var language1 = document.querySelector('#language-1');
var proficiency1 = document.querySelector('#proficiency-1');
var language2 = document.querySelector('#language-2');
var proficiency2 = document.querySelector('#proficiency-2');
var jobTitle1 = document.querySelector('#job-title-1');
var companyDesc1 = document.querySelector('#company-desc-1');
var years1 = document.querySelector('#years-1');
var jobTitle2 = document.querySelector('#job-title-2');
var companyDesc2 = document.querySelector('#company-desc-2');
var years2 = document.querySelector('#years-2');
var profileImageInput = document.querySelector('#profileImage');
var skill1 = document.querySelector('#skill-1');
var skillLevel1 = document.querySelector('#skill-level-1');
var skill2 = document.querySelector('#skill-2');
var skillLevel2 = document.querySelector('#skill-level-2');
var skill3 = document.querySelector('#skill-3');
var skillLevel3 = document.querySelector('#skill-level-3');
var skill4 = document.querySelector('#skill-4');
var skillLevel4 = document.querySelector('#skill-level-4');
var skill5 = document.querySelector('#skill-5');
var skillLevel5 = document.querySelector('#skill-level-5');
var profileImageBase64 = null;
profileImageInput === null || profileImageInput === void 0 ? void 0 : profileImageInput.addEventListener('change', function (event) {
    var _a;
    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            profileImageBase64 = reader_1.result;
            console.log("Image converted to Base64:", profileImageBase64);
        };
        reader_1.readAsDataURL(file);
    }
});
(_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    var formData = {
        aboutMe: {
            firstName: (firstName === null || firstName === void 0 ? void 0 : firstName.value) || '',
            lastName: (lastName === null || lastName === void 0 ? void 0 : lastName.value) || '',
            designation: (designation === null || designation === void 0 ? void 0 : designation.value) || '',
            yourself: (yourself === null || yourself === void 0 ? void 0 : yourself.value) || ''
        },
        contactInfo: {
            mobileNumber: (mobileNumber === null || mobileNumber === void 0 ? void 0 : mobileNumber.value) || '',
            email: (email === null || email === void 0 ? void 0 : email.value) || '',
            linkedin: (linkedin === null || linkedin === void 0 ? void 0 : linkedin.value) || '',
            github: (github === null || github === void 0 ? void 0 : github.value) || '',
            address: (address === null || address === void 0 ? void 0 : address.value) || ''
        },
        education: [
            {
                year: (eduYear1 === null || eduYear1 === void 0 ? void 0 : eduYear1.value) || '',
                degree: (eduDegree1 === null || eduDegree1 === void 0 ? void 0 : eduDegree1.value) || '',
                institute: (eduInstitute1 === null || eduInstitute1 === void 0 ? void 0 : eduInstitute1.value) || ''
            },
            {
                year: (eduYear2 === null || eduYear2 === void 0 ? void 0 : eduYear2.value) || '',
                degree: (eduDegree2 === null || eduDegree2 === void 0 ? void 0 : eduDegree2.value) || '',
                institute: (eduInstitute2 === null || eduInstitute2 === void 0 ? void 0 : eduInstitute2.value) || ''
            }
        ],
        languages: [
            {
                language: (language1 === null || language1 === void 0 ? void 0 : language1.value) || '',
                proficiency: (proficiency1 === null || proficiency1 === void 0 ? void 0 : proficiency1.value) || ''
            },
            {
                language: (language2 === null || language2 === void 0 ? void 0 : language2.value) || '',
                proficiency: (proficiency2 === null || proficiency2 === void 0 ? void 0 : proficiency2.value) || ''
            }
        ],
        experience: [
            {
                jobTitle: (jobTitle1 === null || jobTitle1 === void 0 ? void 0 : jobTitle1.value) || '',
                companyDesc: (companyDesc1 === null || companyDesc1 === void 0 ? void 0 : companyDesc1.value) || '',
                years: (years1 === null || years1 === void 0 ? void 0 : years1.value) || ''
            },
            {
                jobTitle: (jobTitle2 === null || jobTitle2 === void 0 ? void 0 : jobTitle2.value) || '',
                companyDesc: (companyDesc2 === null || companyDesc2 === void 0 ? void 0 : companyDesc2.value) || '',
                years: (years2 === null || years2 === void 0 ? void 0 : years2.value) || ''
            },
            {
                jobTitle: (jobTitle1 === null || jobTitle1 === void 0 ? void 0 : jobTitle1.value) || '',
                companyDesc: (companyDesc1 === null || companyDesc1 === void 0 ? void 0 : companyDesc1.value) || '',
                years: (years1 === null || years1 === void 0 ? void 0 : years1.value) || ''
            }
        ],
        skills: [
            {
                skill: (skill1 === null || skill1 === void 0 ? void 0 : skill1.value) || '',
                level: (skillLevel1 === null || skillLevel1 === void 0 ? void 0 : skillLevel1.value) || ''
            },
            {
                skill: (skill2 === null || skill2 === void 0 ? void 0 : skill2.value) || '',
                level: (skillLevel2 === null || skillLevel2 === void 0 ? void 0 : skillLevel2.value) || ''
            },
            {
                skill: (skill3 === null || skill3 === void 0 ? void 0 : skill3.value) || '',
                level: (skillLevel3 === null || skillLevel3 === void 0 ? void 0 : skillLevel3.value) || ''
            },
            {
                skill: (skill4 === null || skill4 === void 0 ? void 0 : skill4.value) || '',
                level: (skillLevel4 === null || skillLevel4 === void 0 ? void 0 : skillLevel4.value) || ''
            },
            {
                skill: (skill5 === null || skill5 === void 0 ? void 0 : skill5.value) || '',
                level: (skillLevel5 === null || skillLevel5 === void 0 ? void 0 : skillLevel5.value) || ''
            }
        ],
        profileImage: profileImageBase64 || ''
    };
    localStorage.setItem("resumeData", JSON.stringify(formData));
    console.log("Form data saved to localStorage:", formData);
    window.location.href = "mine-resume.html";
});
