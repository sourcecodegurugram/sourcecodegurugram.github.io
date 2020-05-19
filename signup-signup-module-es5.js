function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"main-sign-up\">\n    <mat-tab-group class=\"mat-background\" [(selectedIndex)]=\"selectedIndex\">\n\n      <mat-tab>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width:20%\"></div>\n        </div>\n        <div class=\"forms-field\">\n\n\n          <div class=\"form-group\">\n            <label for=\"usr\">What should we call you here?</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\" name=\"name\" [(ngModel)]=\"name\">\n            <span class=\"under-text\">(This is your username)</span>\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"usr\">What is your real name?</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\n            <span class=\"under-text\">(Not for display publicly for account management only)</span>\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"usr\">When is your birthday*?</label>\n            <input type=\"date\" class=\"form-control\" id=\"usr\" id=\"DOB\" [(ngModel)]=\"DOB\">\n            <span class=\"under-text\">(Only age is displayed publicly)</span>\n          </div>\n\n\n          <span class=\"age-limit\">*Must be over 18 years old to\n            be a member and use the app</span>\n\n          <div class=\"continue-button\" (click)=\"nextStep()\">\n            Continue\n          </div>\n\n        </div>\n      </mat-tab>\n\n      <mat-tab>\n\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width:30%\"></div>\n        </div>\n\n        <div class=\"forms-field\">\n          <div class=\"form-group\">\n            <label for=\"sel1\">I am</label>\n            <select class=\"form-control\" id=\"sel1\" name=\"Gender\" [(ngModel)]=\"Gender\">\n              <option value=\"Man\">Man</option>\n              <option value=\"Woman\">Woman</option>\n              <option value=\"Gender Diverse\">Gender\n                Diverse</option>\n            </select>\n            <span class=\"under-text\">(Man, Woman, Gender\n              Diverse)</span>\n          </div>\n\n\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">Wanting to be contacted by</label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option>Only\n                Men</option>\n              <option>Only Women</option>\n              <option>Only Gender Diverse</option>\n              <option>Everyone</option>\n            </select>\n            <span class=\"under-text\">(Only\n              Men, Only Women, Only Gender Diverse,Everyone)</span>\n          </div>\n\n\n\n\n          <div class=\"blue-button-second-tab\">\n            Why do we ask this if its\n            not for dating or sex?\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">I consider myself an</label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option>introvert</option>\n              <option>extrovert</option>\n              <option>ambivert</option>\n\n            </select>\n            <span class=\"under-text\">(introvert,\n              extrovert, ambivert)</span>\n          </div>\n\n          <label for=\"sel1\">And</label><br>\n\n\n          <div class=\"form-group\">\n            <label for=\"sel1\">I want to meet</label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option>a few good friends</option>\n              <option>lots of acquaintances</option>\n              <option>no preference</option>\n\n            </select>\n            <span class=\"under-text\">(a few good friends,\n              lots of acquaintances, no preference)</span>\n          </div>\n\n          <div class=\"continue-button\" (click)=\"nextStep()\">\n            Continue\n          </div>\n\n\n\n\n        </div>\n      </mat-tab>\n\n\n\n      <mat-tab>\n\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width:50%\"></div>\n        </div>\n\n        <div class=\"forms-field\">\n\n          <div class=\"upload-photos\">\n            Choose Your Profile Photo\n\n\n            <div class=\"upload-btn-wrapper\">\n\n              <div class=\"upload-button\">\n                <div class=\"logo-camera\">\n\n                  <img src=\"../../assets/Images/camera.png\" class=\"camera-pic\">\n                </div>\n                <div>\n                  <button class=\"btn\">Upload a Photo</button>\n                </div>\n              </div>\n              <input type=\"file\" name=\"myfile\" />\n            </div>\n          </div>\n          <div class=\"or\">or</div>\n\n\n          <div class=\"icons\">\n\n            <div class=\"grid-icon\">\n\n              <div><img src=\"../../assets/Images/beef.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/food.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/slice.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/cup.png\" class=\"image-icon\"></div>\n            </div>\n\n            <div class=\"grid-icon\">\n\n              <div><img src=\"../../assets/Images/beef.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/food.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/slice.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/cup.png\" class=\"image-icon\"></div>\n            </div>\n            <div class=\"grid-icon\">\n\n              <div><img src=\"../../assets/Images/beef.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/food.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/slice.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/cup.png\" class=\"image-icon\"></div>\n            </div>\n            <div class=\"grid-icon\">\n\n              <div><img src=\"../../assets/Images/beef.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/food.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/slice.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/cup.png\" class=\"image-icon\"></div>\n            </div>\n            <div class=\"grid-icon\">\n\n              <div><img src=\"../../assets/Images/beef.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/food.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/slice.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/cup.png\" class=\"image-icon\"></div>\n            </div>\n            <div class=\"grid-icon\">\n\n              <div><img src=\"../../assets/Images/beef.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/food.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/slice.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/cup.png\" class=\"image-icon\"></div>\n            </div>\n            <div class=\"grid-icon\">\n\n              <div><img src=\"../../assets/Images/beef.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/food.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/slice.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/cup.png\" class=\"image-icon\"></div>\n            </div>\n            <div class=\"grid-icon\">\n\n              <div><img src=\"../../assets/Images/beef.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/food.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/slice.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/cup.png\" class=\"image-icon\"></div>\n            </div>\n            <div class=\"grid-icon\">\n\n              <div><img src=\"../../assets/Images/beef.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/food.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/slice.png\" class=\"image-icon\"></div>\n              <div><img src=\"../../assets/Images/cup.png\" class=\"image-icon\"></div>\n            </div>\n\n          </div>\n          <div class=\"continue-button\" (click)=\"nextStep()\">\n            Continue\n          </div>\n        </div>\n      </mat-tab>\n\n\n\n\n      <mat-tab>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width:70%\"></div>\n        </div>\n        <div class=\"forms-field\">\n          <div class=\"form-group\">\n            <label for=\"sel1\">I live in</label>\n            <select class=\"form-control\" id=\"sel1\">\n              <option>India</option>\n              <option>UK</option>\n              <option>US</option>\n\n            </select>\n            <span class=\"under-text\"></span>\n          </div>\n          <div class=\"blue-other-button\">\n\n            <div class=\"button-blue-text\">Why isn’t my country here?</div>\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"usr\">At this postal/zip code</label>\n            <input type=\"text\" class=\"form-control\" id=\"usr\">\n            <span class=\"under-text\">(Not for display publicly, used to\n              connect with people near you)</span>\n          </div>\n\n\n          <div class=\"blue-other-button\">\n\n            <div class=\"button-blue-text\">Why can I only meet\n              people who live near me?</div>\n\n          </div>\n\n\n          <div class=\"terms\">\n            <label for=\"usr\">Terms and Conditios</label>\n            <div id=\"usr\" class=\"terms-text\">This Terms of Use (“Agreement”) is a legally binding agreement made by and\n              between Not 4 Dating, LLC\n              (“N4D”) and you, personally and, if applicable, on behalf of the entity for whom you are using this web\n              site (collectively, “you”). This Agreement governs your use of the not4dating.com web site (the “Site”)\n              and the services offered by N4D on the Site (the “Services”), so please read it carefully.\n\n              BY CLICKING THE “I AGREE” BUTTON OR ACCESSING OR USING ANY PART OF THE SITE, YOU AGREE THAT YOU HAVE\n              READ, UNDERSTAND AND AGREE TO BE BOUND BY THIS AGREEMENT AND THE TERMS AND CONDITIONS REFERENCED HEREIN,\n              WHETHER OR NOT YOU REGISTERED AS A MEMBER. IF YOU DO NOT AGREE TO BE SO BOUND, DO NOT ACCESS OR USE THE\n              WEB SITE. INTERNET TECHNOLOGY AND THE APPLICABLE LAWS, RULES, AND REGULATIONS CHANGE FREQUENTLY.\n              ACCORDINGLY, N4D RESERVES THE RIGHT TO MAKE CHANGES TO THIS AGREEMENT AT ANY TIME. YOUR CONTINUED USE OF\n              THE SITE AND SERVICES CONSTITUTES ASSENT TO ANY NEW PROVISION OF THIS AGREEMENT THAT MAY BE POSTED ON\n              THE WEB SITE.\n\n              You must be at least eighteen (18) years of age to register with the Site or use the Site. By using the\n              Site, you represent and warrant that you have the right, authority and capacity to enter into this\n              Agreement and to abide by all of the terms and conditions of this Agreement.\n\n              This Agreement will remain in full force and effect while you use the Site and/or are registered with\n              the Site.\n\n              Representations and Warranties.\n              Each party represents and warrants to the other party: (i)that it has the full power and authority to\n              enter into and perform its obligations under this Agreement; (ii)the assent to and performance by it of\n              its obligations under this Agreement do not constitute a breach of or conflict with any other agreement\n              or arrangement by which it is bound, or any applicable laws, regulations or rules; and (iii)this\n              Agreement contains legal, valid and binding obligations of the parties executing or assenting to this\n              Agreement, enforceable in accordance with its terms and conditions.\n              You represent and warrant to N4D that: (i)you will not infringe the patent, copyright, trademark, trade\n              secret, right of publicity or other right of any third party in your use of the Site and (ii)you will\n              comply with all applicable laws, rules and regulations in your use of the Site.\n\n              Prohibited Conduct\n              In your use of the Site, you may not: (i)infringe any patent, trademark, trade secret, copyright, right\n              of publicity or other right of any party; (ii)disrupt or interfere with the security or use of the Site\n              or any web sites linked to the Site; (iii)interfere with or damage the Site, including, without\n              limitation, through the use of viruses, cancel bots, Trojan horses, harmful code, flood pings, denial of\n              service attacks, packet or IP spoofing, forged routing or electronic mail address information, or\n              similar methods or technology; (iv)attempt to use another’s user name or password, impersonate another\n              person or entity, misrepresent your affiliation with a person or entity, including without limitation\n              N4D, or use a false identity; (v)attempt to obtain unauthorized access to the Site or portions of the\n              Site that are restricted from general access; (vi)engage, directly or indirectly, in transmission of\n              “spam,” chain letters, junk mail or any other type of unsolicited solicitation; (vii)collect, manually\n              or through an automatic process, information about other users without their express consent or other\n              information relating to the Site; (viii)submit false or misleading information to N4D; (ix)engage in any\n              activity that interferes with any third party’s ability to use or enjoy the Site; or (x)assist any third\n              party in engaging in any activity prohibited by this Agreement.\n\n              Privacy Policy\n              You agree to the terms of N4D’s Privacy Policy, which is incorporated by reference into this Agreement.\n\n              Intellectual Property\n              All materials on the Site, including without limitation, the N4D logo, design, text, graphics, other\n              files, and the selection and arrangement thereof are either owned by N4D or are the property of N4D’s\n              suppliers or licensors. You may not use such materials without permission.\n\n              NOT4DATING™ and the NOT4DATING logo™ are trademarks owned by N4D. Page headers, custom graphics, button\n              icons and scripts are trademarks or trade dress of N4D. You may not use any of these trademarks, trade\n              dress, or trade names without express permission of N4D. N4D will retain ownership of its intellectual\n              property rights and you may not obtain any rights therein by virtue of this Agreement or otherwise.\n\n              You will have no right to use, copy, display, perform, create derivative works from, distribute, have\n              distributed, transmit or sublicense from materials or content available on the Site. You may not use any\n              third-party intellectual property without the express written permission of the applicable third party,\n              except as permitted by law.\n\n              Content Posted by You\n              You will not post on the Site or transmit to N4D members, any obscene, abusive, harassing or illegal\n              material or any material that infringes or violates another party’s rights. You will not provide\n              misleading or false information to N4D or to other members. N4D may review and delete any content which,\n              in N4D’s sole discretion, violates this Agreement or which might be offensive, illegal, or that might\n              violate the rights or threaten the safety of other members. By posting information on the Site, you\n              automatically grant to N4D an irrevocable, perpetual, non-exclusive, royalty-free, worldwide license to\n              use the information and prepare derivative works thereof, and to grant and authorize sublicenses of the\n              foregoing.\n\n              Linking and Framing\n              You may not deep link to password-protected portions of the Site; or frame, inline link, or similarly\n              display any N4D content or property, including, without limitation, the Site.\n\n              Confidentiality\n              You may obtain information that is confidential and proprietary to N4D. Such information (“Confidential\n              Information”) may include, without limitation, consumer information, product information, marketing\n              information, and confidential communications from N4D. You shall keep all Confidential Information\n              confidential and not disclose it to any third party. Further, you shall not use the Confidential\n              Information for any purposes.\n\n              Indemnification\n              You agree to hold N4D and its employees, representatives, agents, attorneys, affiliates, directors,\n              employees, officers, managers and shareholders (the “Indemnified Parties”) harmless from any damage,\n              loss, cost or expense (including without limitation, attorneys’ fees and costs) incurred in connection\n              with any third-party claim, demand or action (“Claim”) brought or asserted against any of the\n              Indemnified Parties: (i)alleging facts or circumstances that would constitute a breach of any provision\n              of this Agreement by you or (ii)arising from, related to, or connected with your use of the Site. If you\n              are obligated to provide indemnification pursuant to this provision, N4D may, in its sole and absolute\n              discretion, control the disposition of any Claim at your sole cost and expense. Without limitation of\n              the foregoing, you may not settle, compromise or in any other manner dispose of any Claim without the\n              consent of N4D.\n\n              Disclaimers, Exclusions and Limitations\n              N4D PROVIDES THE ON AN “AS IS” AND “AS AVAILABLE” BASIS. N4D DOES NOT REPRESENT OR WARRANT THAT THE\n              SITE, ITS USE, OR ANY INFORMATION THEREFROM: (I)WILL BE UNINTERRUPTED, (II)WILL BE FREE OF DEFECTS,\n              INACCURACIES OR ERRORS, (III)WILL MEET YOUR REQUIREMENTS, OR (IV) WILL OPERATE IN THE CONFIGURATION OR\n              WITH OTHER HARDWARE OR SOFTWARE YOU USE.\n              N4D DOES NOT SCREEN ITS MEMBERS, CONDUCT BACKGROUND CHECKS ON ITS MEMBERS, OR CONFIRM THE ACCURACY OF\n              THE STATEMENTS OF ITS MEMBERS. N4D MAKES NO REPRESENTATIONS OR WARRANTIES REGARDING THE CONDUCT OF\n              MEMBERS. YOU AGREE TO TAKE REASONABLE PRECAUTIONS IN ALL INTERACTIONS WITH OTHER N4D MEMBERS\n\n              N4D MAKES NO WARRANTIES OTHER THAN THOSE MADE EXPRESSLY IN THIS AGREEMENT, AND HEREBY DISCLAIMS ANY AND\n              ALL IMPLIED WARRANTIES, INCLUDING WITHOUT LIMITATION, WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE,\n              MERCHANTABILITY AND NON-INFRINGEMENT.\n              N4DWILL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY CONSEQUENTIAL, INCIDENTAL, INDIRECT, PUNITIVE OR\n              SPECIAL DAMAGES (INCLUDING DAMAGES RELATING TO LOST PROFITS, LOST DATA OR LOSS OF GOODWILL) ARISING OUT\n              OF, RELATING TO OR CONNECTED WITH THE USE OF THE SITE, BASED ON ANY CAUSE OF ACTION, EVEN IF ADVISED OF\n              THE POSSIBILITY OF SUCH DAMAGES.\n\n              Limitation of Liability\n              EXCEPT FOR A BREACH OF A PARTY’S REPRESENTATIONS AND WARRANTIES OR IN CONNECTION WITH YOUR INDEMNITY\n              OBLIGATIONS UNDER THIS AGREEMENT, IN NO EVENT WILL THE LIABILITY OF EITHER PARTY IN CONNECTION WITH THIS\n              AGREEMENT OR THE SITE EXCEED $100.\n\n              Force Majeure\n              N4D will not be liable for failing to perform under this Agreement by the occurrence of any event beyond\n              its reasonable control, including, without limitation, a labor disturbance, an Internet outage or\n              interruption of service, a communications outage, failure by a service provider to N4D to perform, fire,\n              terrorism, natural disaster or war.\n\n              Arbitration\n              All disputes arising out of or relating to this Agreement (including its formation, performance or\n              alleged breach) or your use of the Site will be exclusively resolved under confidential binding\n              arbitration held in New York, New York before and in accordance with the Rules of the American\n              Arbitration Association. The arbitrator’s award will be binding and may be entered as a judgment in any\n              court of competent jurisdiction. To the fullest extent permitted by applicable law, no arbitration under\n              this Agreement will be joined to an arbitration involving any other party subject to this Agreement,\n              whether through class arbitration proceedings or otherwise. Notwithstanding the foregoing, N4D will have\n              the right to seek injunctive or other equitable relief in state or federal court located in New York,\n              New York to enforce this Agreement or prevent an infringement of a third party’s rights. In the event\n              equitable relief is sought, each party hereby irrevocably submits to the personal jurisdiction of such\n              court.\n\n              Waiver of Class Action Rights\n              By entering into this Agreement, you hereby irrevocably waive any right you may have to join claims with\n              those of others in the form of a class action or similar procedural device. Any claims arising out of,\n              relating to, or connected with this Agreement must be asserted individually.\n\n              Limitation of Actions\n              You acknowledge and agree that, regardless of any statute or law to the contrary, any claim or cause of\n              action you may have arising out of, relating to, or connected with your use of the Site must be filed\n              within one calendar year after such claim or cause of action arises, or forever be barred.\n\n              Changes to the Web Site or Service\n              N4D may, in its sole discretion, change, modify, suspend, make improvements to or discontinue any aspect\n              of the Site, temporarily or permanently, at any time without notice to you, and N4D will not be liable\n              for doing so. Without limiting the foregoing, and notwithstanding anything contained in this Agreement,\n              N4D will have the right from time to time to change the amount of the fees or institute new fees\n              relating to the Site. Further, N4D may impose limits on the amount of storage space for members, or\n              delete materials: (i)stored for an excessive period of time; (ii)that are out-of-date; or (iii)relating\n              to an inactive member account.\n\n              Termination\n              N4D will have the right to terminate your account or your access to the Web Site if it reasonably\n              believes you have breached any of the terms and conditions of this Agreement or N4D discontinues the\n              Site.\n\n              Effect of Termination\n              If your account is terminated, N4D may delete any web sites, files, graphics or other content or\n              materials relating to your use of the Site on N4D’s servers or otherwise in its possession and N4D will\n              have no liability to you or any third party for doing so. Following termination, you will not be\n              permitted to use the Site. If your account or your access to the Site is terminated, N4D reserves the\n              right to exercise whatever means it deems necessary to prevent unauthorized access to the Site,\n              including, but not limited to, technological barriers, IP mapping, and direct contact with your Internet\n              Service Provider.\n\n              Survival\n              This Agreement will survive indefinitely unless and until N4D chooses to terminate it, regardless of\n              whether any account you open is terminated by you or N4D or if you have the right to access or use the\n              Site.\n\n              This Agreement contain the entire understanding of the you and N4D regarding you and N4D regarding the\n              use of the Site, and supersedes all prior and contemporaneous agreements and understandings between you\n              and N4D regarding the use of the Site.\n\n              Notices and Electronic Communications\n              All notices required or permitted to be given under this Agreement will be in writing and delivered to\n              the other party by any of the following methods: (i)hand delivery, (ii)certified U.S. mail, return\n              receipt requested, postage prepaid, (iii)overnight courier, or (iv)electronic mail. If you give notice\n              to N4D, you must use the address shown on the Site. If N4D provides notice to you, it will use the\n              contact information provided by you to N4D. All notices will be deemed received and effective as\n              follows: (i)if by hand-delivery, on the date of delivery, (ii)if by delivery by U.S. mail, on the date\n              of receipt appearing on a return receipt card, (iii)if by overnight courier, on the date receipt is\n              confirmed by such courier service, or (iv)if by electronic mail, 24 hours after the message was sent, if\n              no “system error” or other notice of non-delivery is generated. Each party agrees that any notice that\n              it receives from the other party electronically satisfies any legal requirement that such communications\n              be in writing.</div>\n            <span class=\"under-text\"></span>\n          </div>\n\n\n\n          <div class=\"continue-button\" (click)=\"nextStep()\">\n            Accept Terms & Continue\n          </div>\n        </div>\n      </mat-tab>\n\n\n      <mat-tab>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" style=\"width:80%\"></div>\n        </div>\n\n\n        <div class=\"login-buton\">\n\n          <div class=\"continue-button-google\">\n            Sign Up with Google\n          </div>\n\n\n          <div class=\"continue-button-facebook\">\n            Sign up with Facebook\n          </div>\n\n        </div>\n        <div class=\"or\">OR</div>\n\n        <div class=\"forms-field\">\n        <div class=\"form-group\">\n        \n          <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Email Address\">\n    \n        </div>\n\n        <div class=\"form-group\">\n        \n          <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Password\">\n    \n        </div>\n\n        <div class=\"form-group\">\n        \n          <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Confirm Password\">\n    \n        </div>\n</div>\n<div class=\"continue-button\" (click)=\"nextStep()\">\n Continue\n</div>\n      </mat-tab>\n\n<mat-tab>\n  <div class=\"progress\">\n    <div class=\"progress-bar\" style=\"width:100%\"></div>\n  </div>\n\n  <div class=\"success-market\">Success!  Your account has been created, and we can’t wait to help you find friends.</div>\n\n  <div class=\"last-tab-button\" (click)=\"nextStep()\">\n    <div class=\"continue-button-last\">\n    Free 7 day Trial\n  </div>\n\n  <div class=\"button-last\"> \n    <span class=\"under-text-button\">(No card required)</span>\n  </div>\n   </div>\n \n\n\n\n   <div class=\"success-market\">Become a verified member now for ad-free app usage, unlimited instant messages, and enhanced search</div>\n   \n   \n   <div class=\"last-tab-button\" (click)=\"nextStep()\">\n    <div class=\"continue-button-last\">\n      Become Verified\n  </div>\n\n  <div class=\"button-last\"> \n    <span class=\"under-text-button\">(No Thanks!  I am happy to be a basic member and use the free website version of not4dating. (Check your email to validate your account first).</span>\n  </div>\n   </div>\n\n</mat-tab>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    </mat-tab-group>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/signup/signup-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/signup/signup-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
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


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.module.ts ***!
    \*****************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_8__["SignupPageRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_9__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-sign-up {\n  display: flex;\n  flex-direction: column;\n  margin-top: 6em;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.forms-field {\n  margin: 1em 1em;\n}\n\np.register-with-us {\n  padding: 1.5em;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n\nbutton.btn.btn-success {\n  margin-bottom: 10px;\n}\n\n.chechk-box-terms {\n  margin-top: 10px;\n}\n\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #415DAE;\n}\n\n.facebook {\n  height: 2.9em;\n  width: 88%;\n}\n\n.btn-primary-google {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #E62E2D;\n  height: 3em;\n  width: 88%;\n}\n\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n\nspan.button-text {\n  width: 100%;\n}\n\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.signup-form-progress {\n  height: 23px;\n}\n\n.under-text {\n  color: #ada2a2;\n}\n\n.age-limit {\n  color: #ada2a2;\n}\n\n.form-control {\n  border: 1px solid;\n}\n\n.form-group {\n  margin: 1em 0em;\n}\n\n.progress {\n  display: flex;\n  height: 1.5rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n  margin: 0px 1.5em;\n  border: 1px solid;\n}\n\n.blue-button-second-tab {\n  background-color: #4472C4;\n  padding: 0.2em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 0px 0.5em;\n  border-radius: 6px;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 0em;\n  display: flex;\n  align-items: center;\n  color: black !important;\n  justify-content: space-between;\n  background-color: transparent !important;\n  width: 100% !important;\n  height: 2.5em;\n  border: 1px solid;\n}\n\n.dropdown {\n  margin-bottom: 1em;\n}\n\nul.dropdown-menu.show {\n  width: 100%;\n}\n\na {\n  color: black;\n}\n\n.upload-photos {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-direction: column;\n  color: black;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.btn {\n  color: black;\n  padding: 12px 20px;\n  border-radius: 8px;\n  /* font-size: 20px; */\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  align-items: center;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n\n.upload-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0px;\n  background-color: #DFF4F5;\n  margin: 9px 4em;\n  border-radius: 12px;\n  padding-left: 1em;\n}\n\n.or {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 21px;\n  margin: 1em;\n}\n\n.grid-icon {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  width: 100%;\n  text-align: center;\n}\n\n.icons {\n  height: 50vh;\n  overflow: auto;\n}\n\nimg.image-icon {\n  width: 61%;\n  margin: 1em;\n}\n\n.button-blue-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #4472C4;\n  color: white;\n  padding: 0.7em;\n  border-radius: 10px;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n.terms-text {\n  height: 10vh;\n  overflow: auto;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 0.5em;\n  text-align: justify;\n  font-size: 14px;\n}\n\n.terms {\n  margin: 1em 0px;\n}\n\n.continue-button-google {\n  background-color: #F64225;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.continue-button-facebook {\n  background-color: #4472C4;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.success-market {\n  text-align: center;\n  margin: 2em;\n  font-size: 18px;\n  margin-bottom: 0em;\n}\n\n.under-text-button {\n  color: #ada2a2;\n}\n\n.continue-button-last {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-bottom: 0px;\n}\n\n.button-last {\n  text-align: center;\n  margin: 0em 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0s6XFxBbmd1bGFyIFByb2plY3RcXG5vdDREYXRpbmcvc3JjXFxhcHBcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFFSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDSUo7O0FERkE7RUFDSSxhQUFBO0VBRUEsVUFBQTtBQ0lKOztBREZBO0VBRUksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBRUEsVUFBQTtBQ0dKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFDSSxXQUFBO0FDSUo7O0FERkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7QUNNSjs7QURKQTtFQUNJLGNBQUE7QUNPSjs7QURMQTtFQUNJLGNBQUE7QUNRSjs7QUROQTtFQUNJLGlCQUFBO0FDU0o7O0FEUEE7RUFDSSxlQUFBO0FDVUo7O0FETkE7RUFFSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1NKOztBRFBBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDVUo7O0FEUkE7RUFDRyxrQkFBQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDV0o7O0FEVEE7RUFDSSxrQkFBQTtBQ1lKOztBRFZBO0VBQ0ksV0FBQTtBQ2FKOztBRFZBO0VBRUksWUFBQTtBQ1lKOztBRFZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDYUo7O0FEVkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNhSjs7QURWRTtFQUNFLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1lKOztBRFJFO0VBRUUsZ0JBQUE7RUFDRixrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ1VGOztBRFJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDV0o7O0FEUkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNXSjs7QURUQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1lKOztBRFRBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNZSjs7QURWQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDYUo7O0FEWEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNjSjs7QURaQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNlSjs7QURiQTtFQUNJLGVBQUE7QUNnQko7O0FEZEE7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2dCSjs7QURkQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDaUJKOztBRGZBO0VBRUksY0FBQTtBQ2lCSjs7QURmQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDa0JKOztBRGhCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ21CSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc2lnbi11cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDZlbTtcclxufVxyXG4uZnVsbC13aWR0aFxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZm9ybXMtZmllbGR7XHJcbiAgICBtYXJnaW46IDFlbSAxZW07XHJcbn1cclxucC5yZWdpc3Rlci13aXRoLXVzIHtcclxuICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNoZWNoay1ib3gtdGVybXMge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnNvY2lhbC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTVEQUVcclxufVxyXG4uZmFjZWJvb2sge1xyXG4gICAgaGVpZ2h0OiAyLjllbTtcclxuIFxyXG4gICAgd2lkdGg6IDg4JVxyXG59XHJcbi5idG4tcHJpbWFyeS1nb29nbGVcclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTYyRTJEO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcblxyXG4gICAgd2lkdGg6IDg4JVxyXG59XHJcblxyXG5wLm9yLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG59XHJcbnNwYW4uYnV0dG9uLXRleHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW46IDJlbTtcclxufVxyXG4uc2lnbnVwLWZvcm0tcHJvZ3Jlc3N7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbn1cclxuLnVuZGVyLXRleHQge1xyXG4gICAgY29sb3I6ICNhZGEyYTI7XHJcbn1cclxuLmFnZS1saW1pdHtcclxuICAgIGNvbG9yOiAjYWRhMmEyOztcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbjogMWVtIDBlbTtcclxufVxyXG5cclxuXHJcbi5wcm9ncmVzcyB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICBtYXJnaW46IDBweCAxLjVlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbi5ibHVlLWJ1dHRvbi1zZWNvbmQtdGFiIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweCAwLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcclxuICAgbWFyZ2luLWJvdHRvbTogMGVtOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG4uZHJvcGRvd24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcbnVsLmRyb3Bkb3duLW1lbnUuc2hvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxufVxyXG5hXHJcbntcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4udXBsb2FkLXBob3RvcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnVwbG9hZC1idG4td3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuYnRuIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICBcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIC8qIGZvbnQtc2l6ZTogMjBweDsgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcclxuXHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAudXBsb2FkLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRjRGNTtcclxuICAgIG1hcmdpbjogOXB4IDRlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuXHJcbn1cclxuLm9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbn1cclxuLmdyaWQtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLmljb25zIHtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbmltZy5pbWFnZS1pY29uIHtcclxuICAgIHdpZHRoOiA2MSU7XHJcbiAgICBtYXJnaW46IDFlbTtcclxufVxyXG4uYnV0dG9uLWJsdWUtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuN2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG4udGVybXMtdGV4dCB7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4udGVybXMge1xyXG4gICAgbWFyZ2luOiAxZW0gMHB4O1xyXG59XHJcbi5jb250aW51ZS1idXR0b24tZ29vZ2xlXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNjQyMjU7XHJcbiAgICBwYWRkaW5nOiAwLjZlbSAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDJlbSAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbi1mYWNlYm9va1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xyXG4gICAgcGFkZGluZzogMC42ZW0gMmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAyZW0gMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi5zdWNjZXNzLW1hcmtldCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBlbTtcclxufVxyXG4udW5kZXItdGV4dC1idXR0b25cclxue1xyXG4gICAgY29sb3I6ICNhZGEyYTI7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5idXR0b24tbGFzdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBlbSAzZW07XHJcblxyXG59IiwiLm1haW4tc2lnbi11cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDZlbTtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm1zLWZpZWxkIHtcbiAgbWFyZ2luOiAxZW0gMWVtO1xufVxuXG5wLnJlZ2lzdGVyLXdpdGgtdXMge1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNoZWNoay1ib3gtdGVybXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc29jaWFsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTVEQUU7XG59XG5cbi5mYWNlYm9vayB7XG4gIGhlaWdodDogMi45ZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5idG4tcHJpbWFyeS1nb29nbGUge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2MkUyRDtcbiAgaGVpZ2h0OiAzZW07XG4gIHdpZHRoOiA4OCU7XG59XG5cbnAub3ItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyN3B4O1xufVxuXG5zcGFuLmJ1dHRvbi10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250aW51ZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbn1cblxuLnNpZ251cC1mb3JtLXByb2dyZXNzIHtcbiAgaGVpZ2h0OiAyM3B4O1xufVxuXG4udW5kZXItdGV4dCB7XG4gIGNvbG9yOiAjYWRhMmEyO1xufVxuXG4uYWdlLWxpbWl0IHtcbiAgY29sb3I6ICNhZGEyYTI7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW46IDFlbSAwZW07XG59XG5cbi5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBtYXJnaW46IDBweCAxLjVlbTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbi5ibHVlLWJ1dHRvbi1zZWNvbmQtdGFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJDNDtcbiAgcGFkZGluZzogMC4yZW0gMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDBweCAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLWJvdHRvbTogMGVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIuNWVtO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG51bC5kcm9wZG93bi1tZW51LnNob3cge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnVwbG9hZC1waG90b3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi51cGxvYWQtYnRuLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ0biB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIC8qIGZvbnQtc2l6ZTogMjBweDsgKi9cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi51cGxvYWQtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZGNEY1O1xuICBtYXJnaW46IDlweCA0ZW07XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xufVxuXG4ub3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW46IDFlbTtcbn1cblxuLmdyaWQtaWNvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbnMge1xuICBoZWlnaHQ6IDUwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5pbWcuaW1hZ2UtaWNvbiB7XG4gIHdpZHRoOiA2MSU7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4uYnV0dG9uLWJsdWUtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuN2VtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLnRlcm1zLXRleHQge1xuICBoZWlnaHQ6IDEwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMC41ZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRlcm1zIHtcbiAgbWFyZ2luOiAxZW0gMHB4O1xufVxuXG4uY29udGludWUtYnV0dG9uLWdvb2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNjQyMjU7XG4gIHBhZGRpbmc6IDAuNmVtIDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAyZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5jb250aW51ZS1idXR0b24tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICBwYWRkaW5nOiAwLjZlbSAyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMmVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uc3VjY2Vzcy1tYXJrZXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMmVtO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDBlbTtcbn1cblxuLnVuZGVyLXRleHQtYnV0dG9uIHtcbiAgY29sb3I6ICNhZGEyYTI7XG59XG5cbi5jb250aW51ZS1idXR0b24tbGFzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5idXR0b24tbGFzdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwZW0gM2VtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/signup/signup.page.ts":
  /*!***************************************!*\
    !*** ./src/app/signup/signup.page.ts ***!
    \***************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(http, zone) {
        _classCallCheck(this, SignupPage);

        this.http = http;
        this.zone = zone;
        this.maxNumberOfTabs = 5;
        this.selectedIndex = 0;
      }

      _createClass(SignupPage, [{
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
        key: "LoginForm",
        value: function LoginForm(name, email, confirmemail, firstname, lastname, postalcode, DOB, gender, activity, meet, contracted, _long, status, Education, smoke, alcohol, Languages, pets, mostfriend, cancel) {
          var _this = this;

          console.log("status" + " " + status);
          console.log("Education" + " " + Education);
          console.log("smoke" + "" + smoke);
          console.log("alcohol" + " " + alcohol);
          console.log("Languages " + " " + Languages);
          console.log("pets" + "" + pets);
          console.log("mostfriend " + " " + mostfriend);
          console.log("cancel" + " " + cancel);
          this.http.post('http://gowebtutorial.com/api/json/user/register', {
            name: name,
            mail: email,
            conf_mail: confirmemail,
            field_first_name: {
              "und": [{
                "value": firstname
              }]
            },
            field_last_name: {
              "und": [{
                "value": lastname
              }]
            },
            field_zip_code: {
              "und": [{
                "postal_code": postalcode
              }]
            },
            field_birth_date: {
              "und": [{
                "value": DOB
              }]
            },
            field_gender: {
              "und": [{
                "value": gender
              }]
            },
            field_activities_interests: {
              "und": [{
                activity: activity
              }]
            },
            field_look_meet: {
              "und": [{
                "value": meet
              }]
            },
            field_want_contarct: {
              "und": [{
                "value": contracted
              }]
            },
            field_long_in_city: {
              "und": [{
                "value": _long
              }]
            },
            field_relationship_status: {
              "und": [{
                "value": status
              }]
            },
            field_education_level: {
              "und": [{
                Education: Education
              }]
            },
            field_smoke: {
              "und": [{
                smoke: smoke
              }]
            },
            field_alcohol: {
              "und": [{
                alcohol: alcohol
              }]
            },
            field_languages: {
              "und": [{
                Languages: Languages
              }]
            },
            field_any_pets: {
              "und": [{
                pets: pets
              }]
            },
            field_good_friend: {
              "und": [{
                mostfriend: mostfriend
              }]
            },
            field_plans_get_cancelled: {
              "und": [{
                cancel: cancel
              }]
            }
          }).subscribe(function (data) {
            _this.post = data;
          });
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/signup/signup.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=signup-signup-module-es5.js.map