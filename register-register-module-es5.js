function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<div class=\"background\">\r\n\r\n\r\n  <ion-card class=\"main-register-card\">\r\n    <form>\r\n      <mat-tab-group class=\"mat-background\" [(selectedIndex)]=\"selectedIndex\">\r\n\r\n        <mat-tab>\r\n          <ion-progress-bar value=\"0.0\"></ion-progress-bar>\r\n          <div class=\"card-one-white \">\r\n            <p class=\"register-with-us\">Register with us</p>\r\n            <div class=\"social-button\">\r\n              <button type=\"button\" class=\"btn btn-primary-google\"><i\r\n                  class=\"fab fa-google-plus-square google\"></i>Continue with Google</button>\r\n              <button type=\"button\" class=\"btn btn-primary facebook\"><i class=\"fab fa-facebook-square\"></i>Login with\r\n                Facebook</button>\r\n            </div>\r\n\r\n            <div class=\"form-fields\">\r\n              <p class=\"or-text\">OR</p>\r\n\r\n              <label for=\"name\" class=\"form-label\">Username</label><br>\r\n              <input type=\"text\" id=\"name\" name=\"name\" class=\"form-field-zip-code search-country\"\r\n                [(ngModel)]=\"name\"><br>\r\n\r\n              <label for=\"name\" class=\"form-label\">Email</label><br>\r\n              <input type=\"text\" id=\"email\" name=\"email\" class=\"form-field-zip-code search-country\"\r\n                [(ngModel)]=\"email\"><br>\r\n\r\n              <label for=\"name\" class=\"form-label\">Confirm Email</label><br>\r\n              <input type=\"text\" id=\"email\" name=\"confirmemail \" class=\"form-field-zip-code search-country\"\r\n                [(ngModel)]=\"confirmemail\"><br>\r\n\r\n              <!-- <label for=\"name\" class=\"form-label\">Password</label><br>\r\n            <input type=\"text\" id=\"password\" name=\"password\" class=\"form-field-zip-code search-country\"><br>\r\n            <label for=\"name\" class=\"form-label\">Confirm Password</label><br>\r\n            <input type=\"text\" id=\"confirmpassword\" name=\"confirmpassword\"\r\n              class=\"form-field-zip-code search-country\"><br> -->\r\n            </div>\r\n\r\n            <div class=\"button-container\">\r\n              <button type=\"button\" class=\"button-common\" (click)=\"nextStep()\">Next</button>\r\n            </div>\r\n\r\n            <div class=\"having-trouble\">\r\n\r\n              <p class=\"text-having-trouble\">'Having trouble registering?'</p>\r\n              <img src=\"../../assets/Images/chat.png\" class=\"chat-image\">\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n          </div>\r\n\r\n        </mat-tab>\r\n        <mat-tab>\r\n          <ion-progress-bar value=\"0.5\"></ion-progress-bar>\r\n          <div class=\"card-one-white\">\r\n            <div class=\"upload-card-register\">\r\n              <div class=\"profile-heading\">\r\n                <p class=\"profile-card-title\">Picture</p>\r\n              </div>\r\n              <div class=\"upload-content\">\r\n                <p class=\"upload-text\">Please upload up to 3 pictures.Drag pictures to reorder them.The first picture\r\n                  will\r\n                  be used as your profile picture.</p>\r\n                <p class=\"addnew\">Add a new file</p>\r\n\r\n                <input type=\"file\" id=\"myFile\" name=\"filename\" class=\"input-choose\">\r\n                <button type=\"button\" class=\"btn btn-success\"> <i class=\"fas fa-arrow-circle-up\"></i>Upload</button>\r\n\r\n                <button type=\"button\" class=\"btn btn-success\">Add Another</button>\r\n\r\n                <p class=\"terms\">\r\n                  *You can add up till 10 images<br>\r\n                  Files must less than 2 MB<br>\r\n                  Allowed file types png gif jpg jpeg<br>\r\n                  Images must be smaller than 1024x768 pixels</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-fields\">\r\n              <label for=\"name\" class=\"form-label\">First Name</label><br>\r\n              <input type=\"text\" id=\"name\" name=\"firstname\" class=\"form-field-zip-code search-country\"\r\n                [(ngModel)]=\"firstname\"><br>\r\n\r\n\r\n              <label for=\"name\" class=\"form-label\">Last Name</label><br>\r\n              <input type=\"text\" id=\"lname\" name=\"lastname\" class=\"form-field-zip-code search-country\"\r\n                [(ngModel)]=\"lastname\"><br>\r\n\r\n              <label for=\"name\" class=\"form-label\">Zip Code/Postal Code</label><br>\r\n              <input type=\"text\" id=\"zipcode\" name=\"zipcode\" class=\"form-field-zip-code search-country\"\r\n                [(ngModel)]=\"zipcode\"><br>\r\n\r\n              <label for=\"dateofbirth\">Date Of Birth</label><br>\r\n              <input type=\"date\" name=\"DOB\" id=\"dateofbirth\" class=\"form-field-zip-code search-country\"\r\n                [(ngModel)]=\"DOB\"><br>\r\n             \r\n\r\n              <label class=\"form-label\">Gender</label><br>\r\n              <select id=\"Gender\" class=\"country-field search-country\" name=\"gender\" [(ngModel)]=\"gender\">\r\n                <option value=\"Anyone\">Anyone</option>\r\n                <option value=\"Male\"> Male</option>\r\n                <option value=\"Female\">Female</option>\r\n                <option value=\"Gender Diverse\">Gender Diverse</option>\r\n              </select>\r\n\r\n\r\n              <label for=\"name\" class=\"form-label\">Zip Code/Postal Code</label><br>\r\n              <input type=\"text\" id=\"zipcode\" name=\"zipcode\" class=\"form-field-zip-code search-country\"\r\n                [(ngModel)]=\"zipcode\"><br>\r\n\r\n\r\n                \r\n              <label class=\"form-label\">country</label><br>\r\n              <select id=\"country\" class=\"country-field search-country\" name=\"country\" [(ngModel)]=\"country\">\r\n                <option value=\"au\">Australia</option>\r\n                <option value=\"ca\">Canada</option>\r\n                <option value=\"in\">India</option>\r\n                <option value=\"nz\">New Zealand</option>\r\n                <option value=\"sg\">Singapore</option>\r\n                <option value=\"gb\">United Kingdom</option>\r\n                <option value=\"us\" selected=\"selected\">United States</option>\r\n              </select>\r\n\r\n          \r\n\r\n\r\n\r\n              <label class=\"form-label\">Select Activities/Interests</label><br>\r\n\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input type=\"checkbox\" class=\"form-check-input\" value=\"yoga\" #yogas>yoga\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input type=\"checkbox\" class=\"form-check-input\" value=\"playdates (parents and children)\"#playdatess>playdates (parents and children)\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input type=\"checkbox\" class=\"form-check-input\" value=\"sightseeing\" #sightseeings>sightseeing\r\n                </label>\r\n              </div>\r\n        \r\n\r\n              <label class=\"form-label\">I m Looking to meet</label><br>\r\n              <select id=\"meet\" class=\"country-field search-country\" name=\"meet\" [(ngModel)]=\"meet\">\r\n                <option value=\"3\">Does not matter</option>\r\n                <option value=\"1\">A few goods friends</option>\r\n                <option value=\"2\">A lot of accquaintances</option>\r\n           \r\n              </select>\r\n\r\n\r\n            \r\n\r\n              <label class=\"form-label\">I Want To Be Contacted By*</label><br>\r\n              <select id=\"contracted\" class=\"country-field search-country\"  name=\"contracted\" [(ngModel)]=\"contracted\">\r\n                <option value=\"0\">Either one</option>\r\n                <option value=\"1\">Female only</option>\r\n                <option value=\"2\">Male only</option>\r\n           \r\n              </select>\r\n         \r\n\r\n\r\n\r\n\r\n              <label class=\"form-label\">Terms & Conditions</label><br>\r\n              <div class=\"condition-text-container\">\r\n                <p class=\"condition-text\">\r\n\r\n                  This Terms of Use (“Agreement”) is a legally binding agreement made by and between Not 4 Dating, LLC\r\n                  (“N4D”) and you, personally and, if applicable, on behalf of the entity for whom you are using this\r\n                  web\r\n                  site (collectively, “you”). This Agreement governs your use of the not4dating.com web site (the\r\n                  “Site”)\r\n                  and the services offered by N4D on the Site (the “Services”), so please read it carefully.\r\n\r\n                  BY CLICKING THE “I AGREE” BUTTON OR ACCESSING OR USING ANY PART OF THE SITE, YOU AGREE THAT YOU HAVE\r\n                  READ, UNDERSTAND AND AGREE TO BE BOUND BY THIS AGREEMENT AND THE TERMS AND CONDITIONS REFERENCED\r\n                  HEREIN,\r\n                  WHETHER OR NOT YOU REGISTERED AS A MEMBER. IF YOU DO NOT AGREE TO BE SO BOUND, DO NOT ACCESS OR USE\r\n                  THE\r\n                  WEB SITE. INTERNET TECHNOLOGY AND THE APPLICABLE LAWS, RULES, AND REGULATIONS CHANGE FREQUENTLY.\r\n                  ACCORDINGLY, N4D RESERVES THE RIGHT TO MAKE CHANGES TO THIS AGREEMENT AT ANY TIME. YOUR CONTINUED USE\r\n                  OF\r\n                  THE SITE AND SERVICES CONSTITUTES ASSENT TO ANY NEW PROVISION OF THIS AGREEMENT THAT MAY BE POSTED ON\r\n                  THE WEB SITE.\r\n\r\n                  You must be at least eighteen (18) years of age to register with the Site or use the Site. By using\r\n                  the\r\n                  Site, you represent and warrant that you have the right, authority and capacity to enter into this\r\n                  Agreement and to abide by all of the terms and conditions of this Agreement.\r\n\r\n                  This Agreement will remain in full force and effect while you use the Site and/or are registered with\r\n                  the Site.\r\n\r\n                  Representations and Warranties.\r\n                  Each party represents and warrants to the other party: (i)that it has the full power and authority to\r\n                  enter into and perform its obligations under this Agreement; (ii)the assent to and performance by it\r\n                  of\r\n                  its obligations under this Agreement do not constitute a breach of or conflict with any other\r\n                  agreement\r\n                  or arrangement by which it is bound, or any applicable laws, regulations or rules; and (iii)this\r\n                  Agreement contains legal, valid and binding obligations of the parties executing or assenting to this\r\n                  Agreement, enforceable in accordance with its terms and conditions.\r\n                  You represent and warrant to N4D that: (i)you will not infringe the patent, copyright, trademark,\r\n                  trade\r\n                  secret, right of publicity or other right of any third party in your use of the Site and (ii)you will\r\n                  comply with all applicable laws, rules and regulations in your use of the Site.\r\n\r\n                  Prohibited Conduct\r\n                  In your use of the Site, you may not: (i)infringe any patent, trademark, trade secret, copyright,\r\n                  right\r\n                  of publicity or other right of any party; (ii)disrupt or interfere with the security or use of the\r\n                  Site\r\n                  or any web sites linked to the Site; (iii)interfere with or damage the Site, including, without\r\n                  limitation, through the use of viruses, cancel bots, Trojan horses, harmful code, flood pings, denial\r\n                  of\r\n                  service attacks, packet or IP spoofing, forged routing or electronic mail address information, or\r\n                  similar methods or technology; (iv)attempt to use another’s user name or password, impersonate another\r\n                  person or entity, misrepresent your affiliation with a person or entity, including without limitation\r\n                  N4D, or use a false identity; (v)attempt to obtain unauthorized access to the Site or portions of the\r\n                  Site that are restricted from general access; (vi)engage, directly or indirectly, in transmission of\r\n                  “spam,” chain letters, junk mail or any other type of unsolicited solicitation; (vii)collect, manually\r\n                  or through an automatic process, information about other users without their express consent or other\r\n                  information relating to the Site; (viii)submit false or misleading information to N4D; (ix)engage in\r\n                  any\r\n                  activity that interferes with any third party’s ability to use or enjoy the Site; or (x)assist any\r\n                  third\r\n                  party in engaging in any activity prohibited by this Agreement.\r\n\r\n                  Privacy Policy\r\n                  You agree to the terms of N4D’s Privacy Policy, which is incorporated by reference into this\r\n                  Agreement.\r\n\r\n                  Intellectual Property\r\n                  All materials on the Site, including without limitation, the N4D logo, design, text, graphics, other\r\n                  files, and the selection and arrangement thereof are either owned by N4D or are the property of N4D’s\r\n                  suppliers or licensors. You may not use such materials without permission.\r\n\r\n                  NOT4DATING™ and the NOT4DATING logo™ are trademarks owned by N4D. Page headers, custom graphics,\r\n                  button\r\n                  icons and scripts are trademarks or trade dress of N4D. You may not use any of these trademarks, trade\r\n                  dress, or trade names without express permission of N4D. N4D will retain ownership of its intellectual\r\n                  property rights and you may not obtain any rights therein by virtue of this Agreement or otherwise.\r\n\r\n                  You will have no right to use, copy, display, perform, create derivative works from, distribute, have\r\n                  distributed, transmit or sublicense from materials or content available on the Site. You may not use\r\n                  any\r\n                  third-party intellectual property without the express written permission of the applicable third\r\n                  party,\r\n                  except as permitted by law.\r\n\r\n                  Content Posted by You\r\n                  You will not post on the Site or transmit to N4D members, any obscene, abusive, harassing or illegal\r\n                  material or any material that infringes or violates another party’s rights. You will not provide\r\n                  misleading or false information to N4D or to other members. N4D may review and delete any content\r\n                  which,\r\n                  in N4D’s sole discretion, violates this Agreement or which might be offensive, illegal, or that might\r\n                  violate the rights or threaten the safety of other members. By posting information on the Site, you\r\n                  automatically grant to N4D an irrevocable, perpetual, non-exclusive, royalty-free, worldwide license\r\n                  to\r\n                  use the information and prepare derivative works thereof, and to grant and authorize sublicenses of\r\n                  the\r\n                  foregoing.\r\n\r\n                  Linking and Framing\r\n                  You may not deep link to password-protected portions of the Site; or frame, inline link, or similarly\r\n                  display any N4D content or property, including, without limitation, the Site.\r\n\r\n                  Confidentiality\r\n                  You may obtain information that is confidential and proprietary to N4D. Such information\r\n                  (“Confidential\r\n                  Information”) may include, without limitation, consumer information, product information, marketing\r\n                  information, and confidential communications from N4D. You shall keep all Confidential Information\r\n                  confidential and not disclose it to any third party. Further, you shall not use the Confidential\r\n                  Information for any purposes.\r\n\r\n                  Indemnification\r\n                  You agree to hold N4D and its employees, representatives, agents, attorneys, affiliates, directors,\r\n                  employees, officers, managers and shareholders (the “Indemnified Parties”) harmless from any damage,\r\n                  loss, cost or expense (including without limitation, attorneys’ fees and costs) incurred in connection\r\n                  with any third-party claim, demand or action (“Claim”) brought or asserted against any of the\r\n                  Indemnified Parties: (i)alleging facts or circumstances that would constitute a breach of any\r\n                  provision\r\n                  of this Agreement by you or (ii)arising from, related to, or connected with your use of the Site. If\r\n                  you\r\n                  are obligated to provide indemnification pursuant to this provision, N4D may, in its sole and absolute\r\n                  discretion, control the disposition of any Claim at your sole cost and expense. Without limitation of\r\n                  the foregoing, you may not settle, compromise or in any other manner dispose of any Claim without the\r\n                  consent of N4D.\r\n\r\n                  Disclaimers, Exclusions and Limitations\r\n                  N4D PROVIDES THE ON AN “AS IS” AND “AS AVAILABLE” BASIS. N4D DOES NOT REPRESENT OR WARRANT THAT THE\r\n                  SITE, ITS USE, OR ANY INFORMATION THEREFROM: (I)WILL BE UNINTERRUPTED, (II)WILL BE FREE OF DEFECTS,\r\n                  INACCURACIES OR ERRORS, (III)WILL MEET YOUR REQUIREMENTS, OR (IV) WILL OPERATE IN THE CONFIGURATION OR\r\n                  WITH OTHER HARDWARE OR SOFTWARE YOU USE.\r\n                  N4D DOES NOT SCREEN ITS MEMBERS, CONDUCT BACKGROUND CHECKS ON ITS MEMBERS, OR CONFIRM THE ACCURACY OF\r\n                  THE STATEMENTS OF ITS MEMBERS. N4D MAKES NO REPRESENTATIONS OR WARRANTIES REGARDING THE CONDUCT OF\r\n                  MEMBERS. YOU AGREE TO TAKE REASONABLE PRECAUTIONS IN ALL INTERACTIONS WITH OTHER N4D MEMBERS\r\n\r\n                  N4D MAKES NO WARRANTIES OTHER THAN THOSE MADE EXPRESSLY IN THIS AGREEMENT, AND HEREBY DISCLAIMS ANY\r\n                  AND\r\n                  ALL IMPLIED WARRANTIES, INCLUDING WITHOUT LIMITATION, WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE,\r\n                  MERCHANTABILITY AND NON-INFRINGEMENT.\r\n                  N4DWILL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY CONSEQUENTIAL, INCIDENTAL, INDIRECT, PUNITIVE\r\n                  OR\r\n                  SPECIAL DAMAGES (INCLUDING DAMAGES RELATING TO LOST PROFITS, LOST DATA OR LOSS OF GOODWILL) ARISING\r\n                  OUT\r\n                  OF, RELATING TO OR CONNECTED WITH THE USE OF THE SITE, BASED ON ANY CAUSE OF ACTION, EVEN IF ADVISED\r\n                  OF\r\n                  THE POSSIBILITY OF SUCH DAMAGES.\r\n\r\n                  Limitation of Liability\r\n                  EXCEPT FOR A BREACH OF A PARTY’S REPRESENTATIONS AND WARRANTIES OR IN CONNECTION WITH YOUR INDEMNITY\r\n                  OBLIGATIONS UNDER THIS AGREEMENT, IN NO EVENT WILL THE LIABILITY OF EITHER PARTY IN CONNECTION WITH\r\n                  THIS\r\n                  AGREEMENT OR THE SITE EXCEED $100.\r\n\r\n                  Force Majeure\r\n                  N4D will not be liable for failing to perform under this Agreement by the occurrence of any event\r\n                  beyond\r\n                  its reasonable control, including, without limitation, a labor disturbance, an Internet outage or\r\n                  interruption of service, a communications outage, failure by a service provider to N4D to perform,\r\n                  fire,\r\n                  terrorism, natural disaster or war.\r\n\r\n                  Arbitration\r\n                  All disputes arising out of or relating to this Agreement (including its formation, performance or\r\n                  alleged breach) or your use of the Site will be exclusively resolved under confidential binding\r\n                  arbitration held in New York, New York before and in accordance with the Rules of the American\r\n                  Arbitration Association. The arbitrator’s award will be binding and may be entered as a judgment in\r\n                  any\r\n                  court of competent jurisdiction. To the fullest extent permitted by applicable law, no arbitration\r\n                  under\r\n                  this Agreement will be joined to an arbitration involving any other party subject to this Agreement,\r\n                  whether through class arbitration proceedings or otherwise. Notwithstanding the foregoing, N4D will\r\n                  have\r\n                  the right to seek injunctive or other equitable relief in state or federal court located in New York,\r\n                  New York to enforce this Agreement or prevent an infringement of a third party’s rights. In the event\r\n                  equitable relief is sought, each party hereby irrevocably submits to the personal jurisdiction of such\r\n                  court.\r\n\r\n                  Waiver of Class Action Rights\r\n                  By entering into this Agreement, you hereby irrevocably waive any right you may have to join claims\r\n                  with\r\n                  those of others in the form of a class action or similar procedural device. Any claims arising out of,\r\n                  relating to, or connected with this Agreement must be asserted individually.\r\n\r\n                  Limitation of Actions\r\n                  You acknowledge and agree that, regardless of any statute or law to the contrary, any claim or cause\r\n                  of\r\n                  action you may have arising out of, relating to, or connected with your use of the Site must be filed\r\n                  within one calendar year after such claim or cause of action arises, or forever be barred.\r\n\r\n                  Changes to the Web Site or Service\r\n                  N4D may, in its sole discretion, change, modify, suspend, make improvements to or discontinue any\r\n                  aspect\r\n                  of the Site, temporarily or permanently, at any time without notice to you, and N4D will not be liable\r\n                  for doing so. Without limiting the foregoing, and notwithstanding anything contained in this\r\n                  Agreement,\r\n                  N4D will have the right from time to time to change the amount of the fees or institute new fees\r\n                  relating to the Site. Further, N4D may impose limits on the amount of storage space for members, or\r\n                  delete materials: (i)stored for an excessive period of time; (ii)that are out-of-date; or\r\n                  (iii)relating\r\n                  to an inactive member account.\r\n\r\n                  Termination\r\n                  N4D will have the right to terminate your account or your access to the Web Site if it reasonably\r\n                  believes you have breached any of the terms and conditions of this Agreement or N4D discontinues the\r\n                  Site.\r\n\r\n                  Effect of Termination\r\n                  If your account is terminated, N4D may delete any web sites, files, graphics or other content or\r\n                  materials relating to your use of the Site on N4D’s servers or otherwise in its possession and N4D\r\n                  will\r\n                  have no liability to you or any third party for doing so. Following termination, you will not be\r\n                  permitted to use the Site. If your account or your access to the Site is terminated, N4D reserves the\r\n                  right to exercise whatever means it deems necessary to prevent unauthorized access to the Site,\r\n                  including, but not limited to, technological barriers, IP mapping, and direct contact with your\r\n                  Internet\r\n                  Service Provider.\r\n\r\n                  Survival\r\n                  This Agreement will survive indefinitely unless and until N4D chooses to terminate it, regardless of\r\n                  whether any account you open is terminated by you or N4D or if you have the right to access or use the\r\n                  Site.\r\n\r\n                  This Agreement contain the entire understanding of the you and N4D regarding you and N4D regarding the\r\n                  use of the Site, and supersedes all prior and contemporaneous agreements and understandings between\r\n                  you\r\n                  and N4D regarding the use of the Site.\r\n\r\n                  Notices and Electronic Communications\r\n                  All notices required or permitted to be given under this Agreement will be in writing and delivered to\r\n                  the other party by any of the following methods: (i)hand delivery, (ii)certified U.S. mail, return\r\n                  receipt requested, postage prepaid, (iii)overnight courier, or (iv)electronic mail. If you give notice\r\n                  to N4D, you must use the address shown on the Site. If N4D provides notice to you, it will use the\r\n                  contact information provided by you to N4D. All notices will be deemed received and effective as\r\n                  follows: (i)if by hand-delivery, on the date of delivery, (ii)if by delivery by U.S. mail, on the date\r\n                  of receipt appearing on a return receipt card, (iii)if by overnight courier, on the date receipt is\r\n                  confirmed by such courier service, or (iv)if by electronic mail, 24 hours after the message was sent,\r\n                  if\r\n                  no “system error” or other notice of non-delivery is generated. Each party agrees that any notice that\r\n                  it receives from the other party electronically satisfies any legal requirement that such\r\n                  communications\r\n                  be in writing.\r\n                </p>\r\n              </div>\r\n              <div class=\"chechk-box-terms\">\r\n                <mat-checkbox>I certify that I am at least 18 years of age *</mat-checkbox>\r\n                <mat-checkbox>Accept Terms & Conditions of Use *</mat-checkbox>\r\n              </div>\r\n            </div>\r\n            <div class=\"recaptcha\">\r\n              <re-captcha (resolved)=\"captchaResolved($event)\" siteKey=\"6LeGsfYUAAAAAGFslGW89es1TIhNThrIq0bH5NKK\">\r\n              </re-captcha>\r\n\r\n            </div>\r\n            <div class=\"button-container\">\r\n\r\n              <button type=\"button\" class=\"button-common button-prev\" (click)=\"previousStep()\">Previous</button>\r\n              <button type=\"button\" class=\"button-common\" (click)=\"nextStep()\">Next</button>\r\n            </div>\r\n\r\n            <div class=\"having-trouble\">\r\n\r\n              <p class=\"text-having-trouble\">'Having trouble registering?'</p>\r\n              <img src=\"../../assets/Images/chat.png\" class=\"chat-image\">\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n          </div>\r\n\r\n        </mat-tab>\r\n\r\n\r\n        <mat-tab>\r\n          <ion-progress-bar value=\"1\"></ion-progress-bar>\r\n          <div class=\"card-one-white\">\r\n\r\n            <form class=\"form-fields\">\r\n              <a href=\"\"> I’ll do this later</a>\r\n              <label class=\"form-label\">How Long Have You Lived In The Area?</label><br>\r\n              <select id=\"country\" class=\"country-field search-country\"  name=\"long\" [(ngModel)]=\"long\">\r\n                <option value=\"0\"> 2 year </option>\r\n                <option value=\"1\"> 3 year</option>\r\n                <option value=\"2\">4 year</option>\r\n                <option value=\"3\">5 year</option>\r\n              </select>\r\n\r\n              <label class=\"form-label\">Relationship status</label><br>\r\n              <select id=\"status\" class=\"country-field search-country\" name=\"status\"\r\n                [(ngModel)]=\"status\">\r\n                <option value=\"0\">Single</option>\r\n                <option value=\"1\">Married</option>\r\n              </select>\r\n\r\n\r\n              <label class=\"form-label\">Education Level</label><br>\r\n              <select id=\"level\" class=\"country-field search-country\"  name=\"Education\"\r\n                [(ngModel)]=\"Education\">\r\n                <option value=\"Less Than High School Diploma\">Less Than High School Diploma</option>\r\n                <option value=\"High School Diploma\">High School Diploma</option>\r\n              </select>\r\n\r\n\r\n\r\n              <label class=\"form-label\">How Often Do You Smoke?</label><br>\r\n              <select id=\"smoke\" class=\"country-field search-country\"  name=\"smoke\"\r\n                [(ngModel)]=\"smoke\">\r\n                <option value=\"rarely\">Rarely</option>\r\n                <option value=\"daily\">Daily</option>\r\n              </select>\r\n\r\n\r\n              <label class=\"form-label\">How Often Do You Drink Alcohol?</label><br>\r\n              <select id=\"alcohol\" class=\"country-field search-country\"  name=\"alcohol\"\r\n                [(ngModel)]=\"alcohol\">\r\n                <option value=\"week\">Couple of week</option>\r\n                <option value=\"daily\">Daily</option>\r\n              </select>\r\n\r\n\r\n              <label for=\"name\" class=\"form-label\">Languages Spoken Other than English</label><br>\r\n              <input type=\"text\" id=\"name\" name=\"Languages\" class=\"form-field-zip-code search-country\"\r\n                [(ngModel)]=\"Languages\"><br>\r\n\r\n\r\n              <label class=\"form-label\">Any Pets?</label><br>\r\n\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input type=\"checkbox\" class=\"form-check-input\" value=\"Dog\" #dogs>Dog\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input type=\"checkbox\" class=\"form-check-input\" value=\"cat\"#cats>cat\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input type=\"checkbox\" class=\"form-check-input\" value=\"Rabbit\" #rabbits>rabbit\r\n                </label>\r\n              </div>\r\n              \r\n\r\n            \r\n\r\n\r\n\r\n              <label class=\"form-label\">Most Of My Friends Tend To Be</label><br>\r\n              <select id=\"most\" class=\"country-field search-country\" name=\"mostfriend\" [(ngModel)]=\"mostfriend\">\r\n                <option value=\"Only Child\">Only Child</option>\r\n                <option value=\"Eldest Child\">Eldest Child</option>\r\n                <option value=\"Youngest Child\">Youngest Child</option>\r\n              </select>\r\n\r\n\r\n              <label class=\"form-label\">How Do you React If Plans Get Cancelled?</label><br>\r\n              <select id=\"react\" class=\"country-field search-country\" name=\"cancel\" [(ngModel)]=\"cancel\">\r\n                <option value=\"week\">Things happen-no big Deal</option>\r\n                <option value=\"daily\">Daily</option>\r\n              </select>\r\n\r\n\r\n              <label class=\"form-label\">How Do You Spend Your Days</label><br>\r\n              <textarea rows=\"10\" cols=\"50\" name=\"comment\" form=\"usrform\">\r\n             </textarea>\r\n              <p class=\"caution\">Content limited to 500 characters, remaining: 500</p>\r\n\r\n\r\n\r\n              <label class=\"form-label\">Favorite Movies</label><br>\r\n              <textarea rows=\"10\" cols=\"50\" name=\"comment\" form=\"usrform\">\r\n             </textarea>\r\n              <p class=\"caution\">Content limited to 500 characters, remaining: 500</p>\r\n\r\n\r\n              <label class=\"form-label\">Favorite Music</label><br>\r\n              <textarea rows=\"10\" cols=\"50\" name=\"comment\" form=\"usrform\">\r\n              </textarea>\r\n              <p class=\"caution\">Content limited to 500 characters, remaining: 500</p>\r\n\r\n              <label class=\"form-label\">Favorite TV Shows</label><br>\r\n              <textarea rows=\"10\" cols=\"50\" name=\"comment\" form=\"usrform\">\r\n              </textarea>\r\n              <p class=\"caution\">Content limited to 500 characters, remaining: 500</p>\r\n\r\n\r\n\r\n              <label class=\"form-label\">Favorite Books</label><br>\r\n              <textarea rows=\"10\" cols=\"50\" name=\"comment\" form=\"usrform\">\r\n              </textarea>\r\n              <p class=\"caution\">Content limited to 500 characters, remaining: 500</p>\r\n\r\n\r\n\r\n              <label class=\"form-label\">My Friends And I Usually Talk About</label><br>\r\n              <mat-form-field>\r\n                <mat-select multiple>\r\n                  <mat-option *ngFor=\"let talkabout of talkaboutList\" [value]=\"talkabout\">{{talkabout}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field><br>\r\n\r\n\r\n              <label class=\"form-label\">A Good Friend Is Someone Who...</label><br>\r\n              <mat-form-field>\r\n                <mat-select multiple>\r\n                  <mat-option *ngFor=\"let goodfriend of goodfriendList\" [value]=\"goodfriend\">{{goodfriend}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field><br>\r\n\r\n              <label class=\"form-label\">Anything else you want to say?</label><br>\r\n              <textarea rows=\"10\" cols=\"50\" name=\"comment\" form=\"usrform\">\r\n               </textarea>\r\n              <p class=\"caution\">Content limited to 500 characters, remaining: 500</p>\r\n\r\n\r\n              <label class=\"form-label\">Communication Preferences</label><br>\r\n              <mat-form-field>\r\n                <mat-select multiple>\r\n                  <mat-option *ngFor=\"let Communication of CommunicationList\" [value]=\"Communication\">{{Communication}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field><br>\r\n\r\n\r\n              <div class=\"button-container\">\r\n                <button type=\"button\" class=\"button-common button-prev\" (click)=\"previousStep()\">Previous</button>\r\n                <button type=\"button\" class=\"button-common\"\r\n                  (click)=\"LoginForm(name,email,confirmemail,firstname,lastname,zipcode,gender,DOB,activit,country,yogas.value,playdatess.value,sightseeings.value,meet,contracted,long,status,Education,smoke,alcohol,Languages,cats.value,dogs.value,rabbits.value,mostfriend,cancel)\">Next</button>\r\n\r\n\r\n              </div>\r\n            </form>\r\n            <div class=\"having-trouble\">\r\n\r\n              <p class=\"text-having-trouble\">'Having trouble registering?'</p>\r\n              <img src=\"../../assets/Images/chat.png\" class=\"chat-image\">\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n          </div>\r\n\r\n        </mat-tab>\r\n\r\n\r\n\r\n\r\n\r\n        <mat-tab label=\"Subscribe\">\r\n\r\n\r\n          <div class=\"card-one-white\">\r\n\r\n            <ion-card class=\"subscribe-card\">\r\n              <p class=\"subscription-successfull-text\"> You account is created and you can\r\n                start using our website! </p>\r\n              <a href=\"#\" class=\"subscription-text-anchor\">https://www.not4dating.com/user/</a>\r\n            </ion-card>\r\n\r\n\r\n\r\n            <ion-card class=\"subscribe-card\">\r\n              <p class=\"subscription-successfull-text\">Not4dating Premium Benefits</p>\r\n              <div class=\"other-option\">\r\n                <img src=\"../../assets/Images/subscheck.png\" class=\"chcek-box-subscribe\">\r\n                <p class=\"text-subscribe-check\">No ads</p>\r\n              </div>\r\n              <div class=\"other-option\">\r\n                <img src=\"../../assets/Images/subscheck.png\" class=\"chcek-box-subscribe\">\r\n                <p class=\"text-subscribe-check\">Instant messages</p>\r\n              </div>\r\n              <div class=\"other-option\">\r\n                <img src=\"../../assets/Images/subscheck.png\" class=\"chcek-box-subscribe\">\r\n                <p class=\"text-subscribe-check\">Verified accounts</p>\r\n              </div>\r\n              <div class=\"other-option\">\r\n                <img src=\"../../assets/Images/subscheck.png\" class=\"chcek-box-subscribe\">\r\n                <p class=\"text-subscribe-check\">Improved Search Functions</p>\r\n              </div>\r\n            </ion-card>\r\n\r\n\r\n            <ion-card class=\"subscribe-card\">\r\n              <div class=\"membership\">\r\n\r\n                <p class=\"membership-text\">Start your 7 day trial of the app now (No card required).</p>\r\n                <button type=\"button\" class=\"button-common\" routerLink=\"/chat/searchTab\">Try Now</button>\r\n\r\n              </div>\r\n            </ion-card>\r\n\r\n            <ion-card class=\"subscribe-card\">\r\n              <div class=\"membership\">\r\n                <p class=\"membership-text\">Become a verified member</p>\r\n                <button type=\"button\" class=\"button-common\" routerLink=\"/chat/searchTab\">Buy Now</button>\r\n              </div>\r\n            </ion-card>\r\n\r\n            <ion-card class=\"subscribe-card\">\r\n              <div class=\"membership\">\r\n                <p class=\"membership-text\">Not interested in the app? You can use our website for free. <a\r\n                    href=\"https://www.not4dating.com/\">not4dating.com</a> Check your email to verify your account and\r\n                  get started!</p>\r\n\r\n              </div>\r\n            </ion-card>\r\n\r\n\r\n            <div class=\"having-trouble\">\r\n              <p class=\"text-having-trouble\">'Having trouble registering?'</p>\r\n              <img src=\"../../assets/Images/chat.png\" class=\"chat-image\" (click)=\"chat()\">\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </form>\r\n  </ion-card>\r\n \r\n\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/register/register-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/register/register-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var routes = [{
      path: 'tabs',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"],
      children: [{
        path: 'searchTab',
        loadChildren: '../searchTab/searchTab.module#SearchTabPageModule'
      }, {
        path: 'tabs2',
        loadChildren: '../tabs2/tabs2.module#Tabs2PageModule'
      }, {
        path: 'tabs3',
        loadChildren: '../tabs3/tabs3.module#Tabs3PageModule'
      }]
    }, {
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/register/register.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/register/register.module.ts ***!
    \*********************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/register/register-routing.module.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var ng_recaptcha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-recaptcha */
    "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_10__["RecaptchaModule"].forRoot()],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/register/register.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/register/register.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n}\n.card-one {\n  border: 1px solid #707070;\n}\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 27px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\n.form-fields {\n  margin: 2em;\n}\ntextarea {\n  border-radius: 7px;\n  margin-top: 15px;\n  border: 1px solid;\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n}\nselect {\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n  width: 55%;\n  font-size: 16px;\n  margin-left: 0px;\n  padding-left: 10px;\n}\n.form-label {\n  font-size: 15px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n.button-container {\n  display: flex;\n  margin: 2em;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  margin-left: 0px;\n}\nbutton.button-common {\n  height: 35px;\n  padding: 0px 20px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 17px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n  padding-left: 10px;\n}\n.main-register-card {\n  border: 1px solid #707070;\n  margin: 1.5em;\n  margin-top: 7em;\n}\n.mat-background {\n  background-color: #F5F5F5;\n}\n.card-one-white {\n  background-color: white;\n  padding: 1px;\n}\np.register-with-us {\n  padding: 1.5em;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n.fa-arrow-circle-up:before {\n  content: \"\";\n  margin-right: 11px;\n}\nbutton.btn.btn-success {\n  margin-bottom: 10px;\n}\n.chechk-box-terms {\n  margin-top: 10px;\n}\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nbutton.btn.btn-primary {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #415DAE;\n}\n.facebook {\n  height: 3.5em;\n  padding: 0em 1em;\n  width: 88%;\n}\n.fa-facebook-square:before {\n  content: \"\";\n  font-size: 2em;\n  margin-right: 2em;\n}\n.btn-primary-google {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #4184F3;\n  height: 3.5em;\n  padding: 0em 1em;\n  width: 88%;\n}\n.fa-google-plus-square:before {\n  font-size: 2em;\n  margin-right: 2em;\n}\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n.having-trouble {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 0.5em;\n}\n.upload-card-register {\n  margin: 2em;\n  border: 1px solid #F5F5F5;\n}\n.profile-heading {\n  background-color: #F5F5F5;\n  padding: 0.3em;\n  border-bottom: 1px solid #F5F5F5;\n}\np.profile-card-title {\n  font-size: 14px;\n  margin: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n.upload-content {\n  margin: 10px;\n}\n.input-choose {\n  border: none !important;\n  height: 30px;\n}\n.submit-button {\n  margin: 0px;\n  border: none;\n  padding: 0px 8vw;\n  height: 41px;\n  background-color: #5ADB00;\n  color: white;\n  font-size: 15px;\n}\np.terms {\n  padding-bottom: 10px;\n}\n.radio {\n  height: auto;\n  margin-right: 5px;\n  margin-top: 2px;\n  margin-left: 5vw;\n}\ninput[type=date]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n}\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url('dropdown.png') no-repeat 96% !important;\n}\nselect::-ms-expand {\n  display: none;\n}\n.label-dropdown {\n  padding-left: 10px;\n}\n.condition-text-container {\n  height: 20vh;\n  overflow: auto;\n  border: 1px solid #707070;\n  border-radius: 7px;\n  background-color: #F2F2F2 !important;\n}\np.condition-text {\n  font-size: 12px;\n  color: black;\n  text-align: justify;\n  padding: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n.terms-checkbox {\n  margin-left: 0px;\n  margin-bottom: 0px;\n  margin-top: 1vh;\n}\n.button-prev {\n  background-color: #E81E16 !important;\n}\n.subscribe-card {\n  padding: 1em;\n  border: 1px solid #707070;\n  background-color: white;\n  margin: 2em 1em;\n}\n.subscription-successfull-text {\n  font-size: 14px;\n  color: black;\n  text-align: justify;\n  padding: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n.subscription-text-anchor {\n  font-size: 12px;\n  text-align: justify;\n  padding: 10px;\n  font-family: \"Open Sans\", sans-serif;\n}\n.other-option {\n  display: flex;\n  flex-direction: row;\n  justify-content: baseline;\n  align-items: flex-end;\n  padding: 10px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n  margin-bottom: 10px;\n}\n.text-subscribe-check {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  margin-left: 2vw;\n  margin-bottom: 0px;\n}\n.membership {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\np.membership-text {\n  text-align: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  color: black;\n}\np.note-under-text {\n  margin-bottom: 0px;\n  margin-top: -15px;\n}\n.recaptcha {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  align-items: center;\n}\n.radio-button-align {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 10px;\n}\np {\n  margin-bottom: 0;\n}\n.main-modal {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #00000073;\n  padding: 17em 2em;\n}\n.ion-page {\n  position: none;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n  background-color: black;\n}\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n  background-color: white;\n  padding: 15px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUVJLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBRENKO0FDQ0E7RUFFSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0YsY0FBQTtBRENGO0FDRUE7RUFDSSx5QkFBQTtBRENKO0FDRUE7RUFFSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QURBSjtBQ0VBO0VBQ0ksV0FBQTtBRENKO0FDWUU7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtFQUNBLG9DQUFBO0FEWEo7QUNjRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRFhKO0FDY0U7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBRFhKO0FDY0E7RUFFSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBRFpKO0FDZUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRFpKO0FDY0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QURYSjtBQ2FBO0VBRUksc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FEWEo7QUNhQTtFQUVJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QURYSjtBQ2FBO0VBQ0kseUJBQUE7QURWSjtBQ1lBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FEVEo7QUNXQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURSSjtBQ1VBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FEUEo7QUNVQTtFQUNJLG1CQUFBO0FEUEo7QUNTQTtFQUNJLGdCQUFBO0FETko7QUNTQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUROSjtBQ1FBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QURMSjtBQ09BO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBREpKO0FDTUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FESEo7QUNLQTtFQUVJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBREhKO0FDS0E7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7QURISjtBQ0tBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FERko7QUNJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FEREo7QUNHQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBREFKO0FDRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBRENKO0FDQ0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QURFSjtBQ0FBO0VBQ0ksWUFBQTtBREdKO0FDREE7RUFFSSx1QkFBQTtFQUNBLFlBQUE7QURHSjtBQ0FBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FER0o7QUNEQTtFQUNJLG9CQUFBO0FESUo7QUNGQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRElBO0FDREE7RUFDSSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUZBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FESUo7QUNGQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdEQUFBO0FES0o7QUNERTtFQUFxQixhQUFBO0FES3ZCO0FDSEE7RUFFSSxrQkFBQTtBREtKO0FDSEE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBRE1KO0FDSkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QURPSjtBQ0xBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURRSjtBQ05BO0VBQ0ksb0NBQUE7QURTSjtBQ1BBO0VBRUksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FEU0o7QUNQQTtFQUVJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEU0o7QUNQQTtFQUVJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBRFNKO0FDUEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRFVKO0FDUkE7RUFFSSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRFVKO0FDUkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRFdKO0FDVEE7RUFDSSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FEWUo7QUNWQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QURhSjtBQ1hBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FEY0o7QUNaQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURlSjtBQ2JBO0VBRUksZ0JBQUE7QURlSjtBQ2JBO0VBQ0ksYUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FEZUo7QUNaQTtFQUdJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBRGFKO0FDWEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FEY0oiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9JbWFnZXMvQmFja2dyb3VuZFRpbGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5jYXJkLWNvbnRlbnQtZm9udCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzcwNzA3MDtcbn1cblxuLmNhcmQtb25lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbn1cblxuLnRpdHRsZS1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5mb3JtLWZpZWxkcyB7XG4gIG1hcmdpbjogMmVtO1xufVxuXG50ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcbn1cblxuc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogNTUlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmZvcm0tbGFiZWwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvcm0tbGFiZWwtY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMmVtO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbmJ1dHRvbi5idXR0b24tY29tbW9uIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0OUQ0NDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG59XG5cbi5zZWFyY2gtY291bnRyeSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubWFpbi1yZWdpc3Rlci1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgbWFyZ2luOiAxLjVlbTtcbiAgbWFyZ2luLXRvcDogN2VtO1xufVxuXG4ubWF0LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG4uY2FyZC1vbmUtd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMXB4O1xufVxuXG5wLnJlZ2lzdGVyLXdpdGgtdXMge1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uZmEtYXJyb3ctY2lyY2xlLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74KqXCI7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbn1cblxuYnV0dG9uLmJ0bi5idG4tc3VjY2VzcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jaGVjaGstYm94LXRlcm1zIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNvY2lhbC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE1REFFO1xufVxuXG4uZmFjZWJvb2sge1xuICBoZWlnaHQ6IDMuNWVtO1xuICBwYWRkaW5nOiAwZW0gMWVtO1xuICB3aWR0aDogODglO1xufVxuXG4uZmEtZmFjZWJvb2stc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74KCXCI7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbn1cblxuLmJ0bi1wcmltYXJ5LWdvb2dsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4NEYzO1xuICBoZWlnaHQ6IDMuNWVtO1xuICBwYWRkaW5nOiAwZW0gMWVtO1xuICB3aWR0aDogODglO1xufVxuXG4uZmEtZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbn1cblxucC5vci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI3cHg7XG59XG5cbi5oYXZpbmctdHJvdWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbjogMC41ZW07XG59XG5cbi51cGxvYWQtY2FyZC1yZWdpc3RlciB7XG4gIG1hcmdpbjogMmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjVGNUY1O1xufVxuXG4ucHJvZmlsZS1oZWFkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgcGFkZGluZzogMC4zZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjVGNUY1O1xufVxuXG5wLnByb2ZpbGUtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnVwbG9hZC1jb250ZW50IHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uaW5wdXQtY2hvb3NlIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwcHggOHZ3O1xuICBoZWlnaHQ6IDQxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QURCMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5wLnRlcm1zIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5yYWRpbyB7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbn1cblxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9teXdpbGRhbGJlcnRhLmNhL2ltYWdlcy9HRlgtTVdBLVBhcmtzLVJlc2VydmF0aW9ucy5wbmcpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xufVxuXG5zZWxlY3Qge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL0ltYWdlcy9kcm9wZG93bi5wbmdcIikgbm8tcmVwZWF0IDk2JSAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGFiZWwtZHJvcGRvd24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb25kaXRpb24tdGV4dC1jb250YWluZXIge1xuICBoZWlnaHQ6IDIwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcbn1cblxucC5jb25kaXRpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnRlcm1zLWNoZWNrYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAxdmg7XG59XG5cbi5idXR0b24tcHJldiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFODFFMTYgIWltcG9ydGFudDtcbn1cblxuLnN1YnNjcmliZS1jYXJkIHtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAyZW0gMWVtO1xufVxuXG4uc3Vic2NyaXB0aW9uLXN1Y2Nlc3NmdWxsLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5zdWJzY3JpcHRpb24tdGV4dC1hbmNob3Ige1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ub3RoZXItb3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGV4dC1zdWJzY3JpYmUtY2hlY2sge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWVtYmVyc2hpcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnAubWVtYmVyc2hpcC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxucC5ub3RlLXVuZGVyLXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuXG4ucmVjYXB0Y2hhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmFkaW8tYnV0dG9uLWFsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubWFpbi1tb2RhbCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNzM7XG4gIHBhZGRpbmc6IDE3ZW0gMmVtO1xufVxuXG4uaW9uLXBhZ2Uge1xuICBwb3NpdGlvbjogbm9uZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb250YWluOiBsYXlvdXQgc2l6ZSBzdHlsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIuYmFja2dyb3VuZFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9JbWFnZXMvQmFja2dyb3VuZFRpbGUucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuLmNhcmQtY29udGVudC1mb250XHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuXHJcbn1cclxuLmNhcmQtb25le1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuXHJcbn1cclxuLnRpdHRsZS1jYXJkXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcbi5mb3JtLWZpZWxkc3tcclxuICAgIG1hcmdpbjogMmVtO1xyXG59XHJcbi8vIGlucHV0e1xyXG4vLyAgICAgLyogaGVpZ2h0OiA2dmg7ICovXHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbi8vICAgICBoZWlnaHQ6IDQ3cHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuXHJcbi8vICAgfVxyXG5cclxuICB0ZXh0YXJlYVxyXG4gIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuIFxyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG59XHJcbiAgLmZvcm0tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcbi5mb3JtLWxhYmVsLWNvdW50cnlcclxue1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuYnV0dG9uLmJ1dHRvbi1jb21tb24ge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM0NDlENDQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG59XHJcbi5zZWFyY2gtY291bnRyeVxyXG57XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5tYWluLXJlZ2lzdGVyLWNhcmRcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIG1hcmdpbjoxLjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDdlbTtcclxufVxyXG4ubWF0LWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG4uY2FyZC1vbmUtd2hpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbn1cclxucC5yZWdpc3Rlci13aXRoLXVzIHtcclxuICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmZhLWFycm93LWNpcmNsZS11cDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYwYWFcIjtcclxuICAgIG1hcmdpbi1yaWdodDogMTFweDtcclxufVxyXG5cclxuYnV0dG9uLmJ0bi5idG4tc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jaGVjaGstYm94LXRlcm1zIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE1REFFXHJcbn1cclxuLmZhY2Vib29rIHtcclxuICAgIGhlaWdodDogMy41ZW07XHJcbiAgICBwYWRkaW5nOiAwZW0gMWVtO1xyXG4gICAgd2lkdGg6IDg4JVxyXG59XHJcbi5mYS1mYWNlYm9vay1zcXVhcmU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDgyXCI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMmVtO1xyXG59XHJcbi5idG4tcHJpbWFyeS1nb29nbGVcclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4NEYzO1xyXG4gICAgaGVpZ2h0OiAzLjVlbTtcclxuICAgIHBhZGRpbmc6IDBlbSAxZW07XHJcbiAgICB3aWR0aDogODglXHJcbn1cclxuLmZhLWdvb2dsZS1wbHVzLXNxdWFyZTpiZWZvcmUge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbn1cclxucC5vci10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxufVxyXG4uaGF2aW5nLXRyb3VibGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbn1cclxuLnVwbG9hZC1jYXJkLXJlZ2lzdGVyIHtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Y1RjVGNTtcclxufVxyXG4ucHJvZmlsZS1oZWFkaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgICBwYWRkaW5nOiAwLjNlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjVGNUY1O1xyXG59XHJcbnAucHJvZmlsZS1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLnVwbG9hZC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4uaW5wdXQtY2hvb3NlXHJcbntcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG5cclxufVxyXG4uc3VibWl0LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweCA4dnc7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbnAudGVybXMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLnJhZGlvXHJcbntcclxuaGVpZ2h0OiBhdXRvO1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxubWFyZ2luLXRvcDogMnB4O1xyXG5tYXJnaW4tbGVmdDogNXZ3O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vbXl3aWxkYWxiZXJ0YS5jYS9pbWFnZXMvR0ZYLU1XQS1QYXJrcy1SZXNlcnZhdGlvbnMucG5nKSBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxufVxyXG5zZWxlY3Qge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9JbWFnZXMvZHJvcGRvd24ucG5nXCIpIG5vLXJlcGVhdCA5NiUgIWltcG9ydGFudDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdDo6LW1zLWV4cGFuZCB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbi5sYWJlbC1kcm9wZG93blxyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmNvbmRpdGlvbi10ZXh0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbn1cclxucC5jb25kaXRpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLnRlcm1zLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbn1cclxuLmJ1dHRvbi1wcmV2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFODFFMTYgIWltcG9ydGFudDtcclxufVxyXG4uc3Vic2NyaWJlLWNhcmRcclxue1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAyZW0gMWVtO1xyXG59XHJcbi5zdWJzY3JpcHRpb24tc3VjY2Vzc2Z1bGwtdGV4dFxyXG57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5zdWJzY3JpcHRpb24tdGV4dC1hbmNob3Jcclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm90aGVyLW9wdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogYmFzZWxpbmU7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi50ZXh0LXN1YnNjcmliZS1jaGVja1xyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJ2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubWVtYmVyc2hpcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxucC5tZW1iZXJzaGlwLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxucC5ub3RlLXVuZGVyLXRleHQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuLnJlY2FwdGNoYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnJhZGlvLWJ1dHRvbi1hbGlnbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5wXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLm1haW4tbW9kYWwge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNzM7XHJcbiAgICBwYWRkaW5nOiAxN2VtIDJlbTtcclxufVxyXG5cclxuLmlvbi1wYWdlIHtcclxuXHJcblxyXG4gICAgcG9zaXRpb246IG5vbmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY29udGFpbjogbGF5b3V0IHNpemUgc3R5bGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/register/register.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/register/register.page.ts ***!
    \*******************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(http, zone, alertController) {
        _classCallCheck(this, RegisterPage);

        this.http = http;
        this.zone = zone;
        this.alertController = alertController;
        this.selectedIndex = 0;
        this.maxNumberOfTabs = 3;
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.talkabout = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.goodfriend = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.activit = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.Communication = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.toppingList = ["Dog", "Cat", "Rabbit"];
        this.activities = ["yoga", "playdates (parents and children)", "happy hour/cocktails/beers", "sightseeing"];
        this.talkaboutList = ["work", "Relationship", "Gossip"];
        this.goodfriendList = ["is always there for me", "gives advice", "take my advice"];
        this.CommunicationList = ["Instant private message notification", "Weekly private message reminder", "Inactivity reminder email"];
        this.submit = false;
        this.captchaPassed = false;
        this.visitor = {
          name: "John Doe",
          email: "john@doe.com"
        };
        this.params = [{
          name: "Login",
          value: "joe_public"
        }, {
          name: "Account ID",
          value: "ABCD1234"
        }, {
          name: "Total order value",
          value: "$123"
        }];
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "tabChanged",
        value: function tabChanged(tabChangeEvent) {
          this.selectedIndex = tabChangeEvent.index;
        }
      }, {
        key: "nextStep",
        value: function nextStep() {
          this.selectedIndex += 1;
        }
      }, {
        key: "previousStep",
        value: function previousStep() {
          this.selectedIndex -= 1;
        }
      }, {
        key: "captchaResolved",
        value: function captchaResolved(response) {
          var _this = this;

          this.zone.run(function () {
            _this.captchaPassed = true;
            _this.captchaResponse = response;
          });
        }
      }, {
        key: "LoginForm",
        value: function LoginForm(name, email, confirmemail, firstname, lastname, postalcode, gender, DOB, activity, country, yogas, playdatess, sightseeings, meet, contracted, _long, status, Education, smoke, alcohol, Languages, cats, dogs, rabbits, mostfriend, cancel) {
          var _this2 = this;

          console.log("firstname" + " " + _long);
          console.log("lastname" + " " + status);
          console.log("DOB" + " " + Education);
          console.log("Activity" + " " + status);
          this.http.post("https://gowebtutorial.com/api/json/user/register", {
            name: name,
            mail: email,
            conf_mail: confirmemail,
            field_first_name: {
              und: [{
                value: firstname
              }]
            },
            field_last_name: {
              und: [{
                value: lastname
              }]
            },
            field_zip_code: {
              und: [{
                postal_code: postalcode,
                country: country
              }]
            },
            field_birth_date: {
              und: [{
                value: DOB
              }]
            },
            field_gender: {
              und: gender
            },
            field_activities_interests: {
              und: {
                yoga: yogas,
                playdates: playdatess,
                sightseeing: sightseeings
              }
            },
            field_look_meet: {
              und: meet
            },
            field_want_contarct: {
              und: contracted
            },
            field_long_in_city: {
              und: {
                value: _long
              }
            },
            field_relationship_status: {
              und: status
            },
            field_education_level: {
              und: Education
            },
            field_smoke: {
              und: smoke
            },
            field_alcohol: {
              und: alcohol
            },
            field_any_pets: {
              und: {
                Dog: dogs,
                Cat: cats,
                Rabbit: rabbits
              }
            },
            field_friends_tend_to_be: {
              und: mostfriend
            }
          }).subscribe(function (data) {
            _this2.post = data;

            if (_this2.post.uid) {
              _this2.presentAlert();
            } else {
              alert(_this2.post);
            }
          });
        }
      }, {
        key: "onsubmit",
        value: function onsubmit() {
          this.submit = false;
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      message: ' Your Have Registered successfully',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-register",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/register/register.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=register-register-module-es5.js.map