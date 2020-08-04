(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <app-navigationbar></app-navigationbar>\r\n</ion-header>\r\n\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<ion-content>\r\n  <div class=\"main-sign-up\">\r\n    <mat-tab-group class=\"mat-background\" [(selectedIndex)]=\"selectedIndex\">\r\n\r\n      <!-- Basic information tab -->\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:20%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"forms-field\">\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">What should we call you here?</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\" name=\"name\" [(ngModel)]=\"name\">\r\n            <span class=\"under-text\">(This is your username)</span>\r\n          </div>\r\n\r\n\r\n          <!-- <div class=\"form-group\">\r\n            <label for=\"usr\">What is your real name?</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\" name=\"real\" [(ngModel)]=\"real\">\r\n            <span class=\"under-text\">(Not for display publicly for account management only)</span>\r\n          </div> -->\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">What is your First name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"first_name\" name=\"fname\" [(ngModel)]=\"fname\">\r\n            <span class=\"under-text\">(Not for display publicly, for account management only)</span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">What is your Last name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"last_name\" name=\"lname\" [(ngModel)]=\"lname\">\r\n            <span class=\"under-text\">(Not for display publicly, for account management only)</span>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <!-- <div class=\"align-date\">\r\n            <div class=\"month\">\r\n             <label class=\"headinf-date\">Month*</label>\r\n            <select name=\"Month\" class=\"custom-select mb-3\" [(ngModel)]=\"Month\">\r\n              <option value=\"1\">Jan</option>\r\n              <option value=\"2\">Feb</option>\r\n              <option value=\"3\">Mar</option>\r\n              <option value=\"4\">Apr</option>\r\n              <option value=\"5\">May</option>\r\n              <option value=\"6\">Jun</option>\r\n              <option value=\"7\">Jul</option>\r\n              <option value=\"8\">Aug</option>\r\n              <option value=\"9\">Sep</option>\r\n              <option value=\"10\">Oct</option>\r\n              <option value=\"11\">Nov</option>\r\n              <option value=\"12\">Dec</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"day\">\r\n            <label class=\"headinf-date\">Day*</label>\r\n            <select name=\"day\" class=\"custom-select mb-3\" name=\"day\" [(ngModel)]=\"day\">\r\n              <option value=\"1\">1</option>\r\n              <option value=\"2\">2</option>\r\n              <option value=\"3\">3</option>\r\n              <option value=\"4\">4</option>\r\n              <option value=\"5\">5</option>\r\n              <option value=\"6\">6</option>\r\n              <option value=\"7\">7</option>\r\n              <option value=\"8\">8</option>\r\n              <option value=\"9\">9</option>\r\n              <option value=\"10\">10</option>\r\n              <option value=\"11\">11</option>\r\n              <option value=\"12\">12</option>\r\n              <option value=\"13\">13</option>\r\n              <option value=\"14\">14</option>\r\n              <option value=\"15\">15</option>\r\n              <option value=\"16\">16</option>\r\n              <option value=\"17\">17</option>\r\n              <option value=\"18\">18</option>\r\n              <option value=\"19\">19</option>\r\n              <option value=\"20\">20</option>\r\n              <option value=\"21\">21</option>\r\n              <option value=\"22\">22</option>\r\n              <option value=\"23\">23</option>\r\n              <option value=\"24\">24</option>\r\n              <option value=\"25\">25</option>\r\n              <option value=\"26\">26</option>\r\n              <option value=\"27\">27</option>\r\n              <option value=\"28\">28</option>\r\n              <option value=\"29\">29</option>\r\n              <option value=\"30\">30</option>\r\n              <option value=\"31\">31</option>\r\n            </select>\r\n            </div>\r\n            <div class=\"year\">\r\n            <label class=\"headinf-date\">Year*</label>\r\n            <select name=\"year\" class=\"custom-select mb-3\" name=\"year\" [(ngModel)]=\"year\">\r\n           <option value=\"1930\">1930</option><option value=\"1931\">1931</option><option value=\"1932\">1932</option><option value=\"1933\">1933</option><option value=\"1934\">1934</option><option value=\"1935\">1935</option><option value=\"1936\">1936</option><option value=\"1937\">1937</option><option value=\"1938\">1938</option><option value=\"1939\">1939</option><option value=\"1940\">1940</option><option value=\"1941\">1941</option><option value=\"1942\">1942</option><option value=\"1943\">1943</option><option value=\"1944\" selected=\"selected\">1944</option><option value=\"1945\">1945</option><option value=\"1946\">1946</option><option value=\"1947\">1947</option><option value=\"1948\">1948</option><option value=\"1949\">1949</option><option value=\"1950\">1950</option><option value=\"1951\">1951</option><option value=\"1952\">1952</option><option value=\"1953\">1953</option><option value=\"1954\">1954</option><option value=\"1955\">1955</option><option value=\"1956\">1956</option><option value=\"1957\">1957</option><option value=\"1958\">1958</option><option value=\"1959\">1959</option><option value=\"1960\">1960</option><option value=\"1961\">1961</option><option value=\"1962\">1962</option><option value=\"1963\">1963</option><option value=\"1964\">1964</option><option value=\"1965\">1965</option><option value=\"1966\">1966</option><option value=\"1967\">1967</option><option value=\"1968\">1968</option><option value=\"1969\">1969</option><option value=\"1970\">1970</option><option value=\"1971\">1971</option><option value=\"1972\">1972</option><option value=\"1973\">1973</option><option value=\"1974\">1974</option><option value=\"1975\">1975</option><option value=\"1976\">1976</option><option value=\"1977\">1977</option><option value=\"1978\">1978</option><option value=\"1979\">1979</option><option value=\"1980\">1980</option><option value=\"1981\">1981</option><option value=\"1982\">1982</option><option value=\"1983\">1983</option><option value=\"1984\">1984</option><option value=\"1985\">1985</option><option value=\"1986\">1986</option><option value=\"1987\">1987</option><option value=\"1988\">1988</option><option value=\"1989\">1989</option><option value=\"1990\">1990</option><option value=\"1991\">1991</option><option value=\"1992\">1992</option><option value=\"1993\">1993</option><option value=\"1994\">1994</option><option value=\"1995\">1995</option><option value=\"1996\">1996</option><option value=\"1997\">1997</option><option value=\"1998\">1998</option><option value=\"1999\">1999</option><option value=\"2000\">2000</option><option value=\"2001\">2001</option><option value=\"2002\">2002</option>\r\n            </select>\r\n          </div>\r\n        </div> -->\r\n            <label for=\"usr\">When is your birthday*?</label>\r\n            <input type=\"date\" class=\"form-control\" id=\"usr\" name=\"DOB\" [(ngModel)]=\"DOB\" (click)=\"CheckDOB()\">\r\n            <span class=\"under-text\">(Only age is displayed publicly)</span>\r\n\r\n          </div>\r\n\r\n          <span class=\"age-limit\">*Must be over 18 years old to\r\n            be a member and use the app By continuing below</span>\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"checkbox\" class=\"form-check-input\" value=\"CheckBox\" [(ngModel)]=\"CheckBox\"\r\n                (change)=\"onCheckboxChange($event)\">I confirm I am over 18.\r\n            </label>\r\n          </div>\r\n\r\n          <div class=\"continue-button\" (click)=\"selectTab(1, 0)\">\r\n            Continue\r\n          </div>\r\n\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <!-- Additional information tab -->\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:30%\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"forms-field\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"sel1\">I am</label>\r\n              <select class=\"form-control\" id=\"sel1\" name=\"Gender\" [(ngModel)]=\"Gender\">\r\n\r\n                <option value=\"Male\"> male</option>\r\n                <option value=\"Female\">female</option>\r\n                <option value=\"Gender Diverse\">gender Diverse</option>\r\n              </select>\r\n              <span class=\"under-text\"></span>\r\n            </div>\r\n\r\n          </form>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"contarct\">Wanting to be contacted by</label>\r\n            <select class=\"form-control\" id=\"contarct\" name=\"contract\" [(ngModel)]=\"contract\">\r\n              <option value=\"0\" selected>men only</option>\r\n              <option value=\"1\">women only </option>\r\n              <option value=\"2\">gender diverse only</option>\r\n              <option value=\"3\" selected=\"selected\">everyone</option>\r\n            </select>\r\n            <span class=\"under-text\"></span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"blue-button-second-tab\">\r\n            Why do we ask this if its\r\n            not for dating or sex?\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">I consider myself an</label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"myself\" [(ngModel)]=\"myself\">\r\n              <option value=\"Outgoing\">Outgoing</option>\r\n              <option value=\"On the Quieter Side\">On the Quieter Side</option>\r\n              <option value=\"A Mix of Both\">A Mix of Both</option>\r\n\r\n            </select>\r\n            <span class=\"under-text\"></span>\r\n          </div>\r\n\r\n          <label for=\"sel1\">And</label><br>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">I want to meet</label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"meet\" [(ngModel)]=\"meet\">\r\n              <option value=\"1\">a few goods friends</option>\r\n              <option value=\"2\">a lot of accquaintances</option>\r\n              <option value=\"3\">no preference</option>\r\n\r\n\r\n            </select>\r\n            <span class=\"under-text\"></span>\r\n          </div>\r\n\r\n          <div class=\"continue-button\" (click)=\"selectTab(2, 1)\">\r\n            Continue\r\n          </div>\r\n\r\n\r\n          <div class=\"previous-button\" (click)=\"previousStep()\">\r\n            Previous\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <!-- Image Tab -->\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:50%\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"forms-field\">\r\n          <div class=\"upload-photos\">\r\n            <!-- Before image chosen -->\r\n            <span *ngIf=\"!imageContinue\">Choose Your Profile Photo</span>\r\n\r\n            <!-- After image chosen -->\r\n            <img *ngIf=\"imageContinue\" [src]=\"displayImage\" style=\"width: 50%; margin: auto; margin-bottom: 2em;\"\r\n              id=\"preview\" />\r\n            <!-- <canvas id=\"myCanvas\"></canvas> -->\r\n\r\n            <span *ngIf=\"imageContinue\">Image Uploaded</span>\r\n\r\n            <div *ngIf=\"!imageContinue\" class=\"upload-btn-wrapper\">\r\n              <div class=\"upload-button\">\r\n                <div class=\"logo-camera\">\r\n                  <img src=\"../../assets/Images/camera.png\" class=\"camera-pic\">\r\n                </div>\r\n                <div>\r\n                  <button *ngIf=\"!imageContinue\" class=\"btn\" (click)=\"openCamera()\">Take a Selfie</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"!imageContinue\" class=\"or-text-image\">OR</div>\r\n\r\n            <div *ngIf=\"!imageContinue\" class=\"upload-btn-wrapper\">\r\n              <div class=\"upload-button\">\r\n                <div class=\"logo-camera\">\r\n                  <img src=\"../../assets/Images/camera.png\" class=\"camera-pic\">\r\n                </div>\r\n                <div>\r\n                  <button *ngIf=\"!imageContinue\" class=\"btn\" (click)=\"filechooser()\">Upload from library</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div *ngIf=\"imageContinue\" class=\"continue-button\" (click)=\"selectTab(3, 2)\">\r\n            Continue\r\n          </div>\r\n\r\n          <div class=\"previous-button\" (click)=\"previousStep()\">\r\n            Previous\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <!-- Loctation and activities tab -->\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:70%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"forms-field\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">I live in</label>\r\n            <select class=\"form-control\" id=\"sel1\" name=\"live\" [(ngModel)]=\"live\">\r\n              <option value=\"us\" selected=\"selected\">US</option>\r\n              <option value=\"ca\">Canada</option>\r\n              <option value=\"in\">India</option>\r\n              <option value=\"gb\">UK</option>\r\n              <option value=\"au\">Australia</option>\r\n              <option value=\"nz\">New Zealand</option>\r\n              <option value=\"sg\">Singapore</option>\r\n\r\n\r\n\r\n            </select>\r\n            <span class=\"under-text\"></span>\r\n          </div>\r\n          <div class=\"blue-other-button\">\r\n\r\n            <div class=\"button-blue-text\">Why isn’t my country here?</div>\r\n\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"usr\">at this postal/zip code</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\" name=\"zip\" [(ngModel)]=\"zip\">\r\n            <span class=\"under-text\">(Not for display publicly, used to\r\n              connect with people near you)</span>\r\n          </div>\r\n\r\n\r\n          <div class=\"blue-other-button\">\r\n\r\n            <div class=\"button-blue-text\">Why can I only meet\r\n              people who live near me?</div>\r\n\r\n          </div>\r\n\r\n\r\n          <ion-item class=\"mt-4\">\r\n\r\n            <ion-label>Activities/Interest</ion-label>\r\n            <ion-select multiple=\"true\" cancelText=\"Close\" okText=\"Okay\" name=\"activity\" [(ngModel)]=\"activity\">\r\n              <ion-select-option value=\"yoga\" #yogas>yoga</ion-select-option>\r\n              <ion-select-option value=\"playdates (parents and children)\" #playdatess>playdates (parents and children)\r\n              </ion-select-option>\r\n              <ion-select-option value=\"happy hour/cocktails/beers\" #beers>happy hour/cocktails/beers\r\n              </ion-select-option>\r\n              <ion-select-option value=\"sightseeing\" #sightseeings>sightseeing</ion-select-option>\r\n              <ion-select-option value=\"artsy stuff (making or looking at)\" #artsy>artsy stuff (making or looking at)\r\n              </ion-select-option>\r\n              <ion-select-option value=\"cooking\" #cook>cooking</ion-select-option>\r\n              <ion-select-option value=\"dancing\" #dancing>dancing</ion-select-option>\r\n              <ion-select-option value=\"people watching\" #watching>people watching</ion-select-option>\r\n              <ion-select-option value=\"video games\" #games>video games</ion-select-option>\r\n              <ion-select-option value=\"traveling/vacations\" #traveling>traveling/vacations</ion-select-option>\r\n\r\n              <ion-select-option value=\"history buff\" #history>history buff</ion-select-option>\r\n              <ion-select-option value=\"board games\" #board>board games</ion-select-option>\r\n              <ion-select-option value=\"sports (playing)\" #sports>sports (playing)</ion-select-option>\r\n              <ion-select-option value=\"mom's/dad's night out w/o kids\" #mom>mom's/dad's night out w/o kids\r\n              </ion-select-option>\r\n              <ion-select-option value=\"outdoor activities\" #outdoor>outdoor activities</ion-select-option>\r\n              <ion-select-option value=\"dining out\" #dining>dining out</ion-select-option>\r\n              <ion-select-option value=\"concerts/shows\" #concerts>concerts/shows</ion-select-option>\r\n              <ion-select-option value=\"sports (watching)\" #sportwatching>sports (watching)</ion-select-option>\r\n              <ion-select-option value=\"shopping\" #shoppings>shopping</ion-select-option>\r\n              <ion-select-option value=\"crafty things (things you make)\" #crafty>crafty things (things you make)\r\n              </ion-select-option>\r\n              <ion-select-option value=\"photography\" #photographs>photography</ion-select-option>\r\n              <ion-select-option value=\"animal lover/pet owner\" #animal>animal lover/pet owner</ion-select-option>\r\n              <ion-select-option value=\"crime/mystery reader\" #crime> crime/mystery reader</ion-select-option>\r\n              <ion-select-option value=\"chess\" #chess>chess</ion-select-option>\r\n\r\n\r\n              <ion-select-option value=\"movies\" #movies>movies</ion-select-option>\r\n              <ion-select-option value=\"dog walking/dog park\" #dog>dog walking/dog park</ion-select-option>\r\n              <ion-select-option value=\"fitness/exercise\" #fitness>fitness/exercise</ion-select-option>\r\n              <ion-select-option value=\"playing music\" #music>playing music</ion-select-option>\r\n              <ion-select-option value=\"trekking/backpacking/camping\" #trekking>trekking/backpacking/camping\r\n              </ion-select-option>\r\n              <ion-select-option value=\"cars/motorcycles\" #cars>cars/motorcycles</ion-select-option>\r\n              <ion-select-option value=\"antiques\" #antiques>antiques</ion-select-option>\r\n              <ion-select-option value=\"horses/riding\" #horses>horses/riding</ion-select-option>\r\n              <ion-select-option value=\"anime/manga\" #anime>anime/manga</ion-select-option>\r\n              <ion-select-option value=\"scifi/fantasy\" #scifi>scifi/fantasy</ion-select-option>\r\n              <ion-select-option value=\"scuba\" #scuba> scuba</ion-select-option>\r\n              <ion-select-option value=\"gardeningr\" #gardening>gardening</ion-select-option>\r\n              <ion-select-option value=\"rock climbing\" #rock>rock climbing</ion-select-option>\r\n              <ion-select-option value=\"cycling/mountain biking\" #cycling>cycling/mountain biking</ion-select-option>\r\n\r\n              <ion-select-option value=\"mindfulness and meditation\" #mindfulness>mindfulness and meditation\r\n              </ion-select-option>\r\n              <ion-select-option value=\"makeup/hair/beauty\" #makeup>makeup/hair/beauty</ion-select-option>\r\n              <ion-select-option value=\" gambling\" #gambling>gambling</ion-select-option>\r\n\r\n              <ion-select-option value=\"billiards/snooker\" #billiards>billiards/snooker</ion-select-option>\r\n              <ion-select-option value=\"astrology/tarot\" #astrology>astrology/tarot</ion-select-option>\r\n              <ion-select-option value=\"golf\" #astrology> golf</ion-select-option>\r\n              <ion-select-option value=\"day hikes/bushwalking\" #hikes>day hikes/bushwalking</ion-select-option>\r\n              <ion-select-option value=\"tabletop RPG (D&D)\" #tabletop>tabletop RPG (D&D)</ion-select-option>\r\n              <ion-select-option value=\"reading\" #reading>reading</ion-select-option>\r\n              <ion-select-option value=\"creative writing\" #creative>creative writing</ion-select-option>\r\n              <ion-select-option value=\"cosplay\" #cosplay>cosplay</ion-select-option>\r\n              <ion-select-option value=\"home decorating\" #home>home decorating</ion-select-option>\r\n\r\n              <ion-select-option value=\" knitting, crochet, or sewing\" #knitting>knitting, crochet, or sewing\r\n              </ion-select-option>\r\n\r\n\r\n              <ion-select-option value=\"card games\" #card>card games</ion-select-option>\r\n              <ion-select-option value=\"religious activities\" #religious>religious activities</ion-select-option>\r\n              <ion-select-option value=\"board sports (surf, paddle, kite)\" #board>board sports (surf, paddle, kite)\r\n              </ion-select-option>\r\n\r\n              <ion-select-option value=\"religious activities\" #religious>religious activities</ion-select-option>\r\n              <ion-select-option value=\"volunteering, charity work\" #volunteering>volunteering, charity work\r\n              </ion-select-option>\r\n              <ion-select-option value=\"tennis\" #tennis>tennis</ion-select-option>\r\n\r\n\r\n\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <div class=\"terms\">\r\n            <label for=\"usr\">Terms and Conditions</label>\r\n            <div id=\"usr\" class=\"terms-text\">This Terms of Use (“Agreement”) is a legally binding agreement made by and\r\n              between Not 4 Dating, LLC\r\n              (“N4D”) and you, personally and, if applicable, on behalf of the entity for whom you are using this web\r\n              site (collectively, “you”). This Agreement governs your use of the not4dating.com web site (the “Site”)\r\n              and the services offered by N4D on the Site (the “Services”), so please read it carefully.\r\n\r\n              BY CLICKING THE “I AGREE” BUTTON OR ACCESSING OR USING ANY PART OF THE SITE, YOU AGREE THAT YOU HAVE\r\n              READ, UNDERSTAND AND AGREE TO BE BOUND BY THIS AGREEMENT AND THE TERMS AND CONDITIONS REFERENCED HEREIN,\r\n              WHETHER OR NOT YOU REGISTERED AS A MEMBER. IF YOU DO NOT AGREE TO BE SO BOUND, DO NOT ACCESS OR USE THE\r\n              WEB SITE. INTERNET TECHNOLOGY AND THE APPLICABLE LAWS, RULES, AND REGULATIONS CHANGE FREQUENTLY.\r\n              ACCORDINGLY, N4D RESERVES THE RIGHT TO MAKE CHANGES TO THIS AGREEMENT AT ANY TIME. YOUR CONTINUED USE OF\r\n              THE SITE AND SERVICES CONSTITUTES ASSENT TO ANY NEW PROVISION OF THIS AGREEMENT THAT MAY BE POSTED ON\r\n              THE WEB SITE.\r\n\r\n              You must be at least eighteen (18) years of age to register with the Site or use the Site. By using the\r\n              Site, you represent and warrant that you have the right, authority and capacity to enter into this\r\n              Agreement and to abide by all of the terms and conditions of this Agreement.\r\n\r\n              This Agreement will remain in full force and effect while you use the Site and/or are registered with\r\n              the Site.\r\n\r\n              Representations and Warranties.\r\n              Each party represents and warrants to the other party: (i)that it has the full power and authority to\r\n              enter into and perform its obligations under this Agreement; (ii)the assent to and performance by it of\r\n              its obligations under this Agreement do not constitute a breach of or conflict with any other agreement\r\n              or arrangement by which it is bound, or any applicable laws, regulations or rules; and (iii)this\r\n              Agreement contains legal, valid and binding obligations of the parties executing or assenting to this\r\n              Agreement, enforceable in accordance with its terms and conditions.\r\n              You represent and warrant to N4D that: (i)you will not infringe the patent, copyright, trademark, trade\r\n              secret, right of publicity or other right of any third party in your use of the Site and (ii)you will\r\n              comply with all applicable laws, rules and regulations in your use of the Site.\r\n\r\n              Prohibited Conduct\r\n              In your use of the Site, you may not: (i)infringe any patent, trademark, trade secret, copyright, right\r\n              of publicity or other right of any party; (ii)disrupt or interfere with the security or use of the Site\r\n              or any web sites linked to the Site; (iii)interfere with or damage the Site, including, without\r\n              limitation, through the use of viruses, cancel bots, Trojan horses, harmful code, flood pings, denial of\r\n              service attacks, packet or IP spoofing, forged routing or electronic mail address information, or\r\n              similar methods or technology; (iv)attempt to use another’s user name or password, impersonate another\r\n              person or entity, misrepresent your affiliation with a person or entity, including without limitation\r\n              N4D, or use a false identity; (v)attempt to obtain unauthorized access to the Site or portions of the\r\n              Site that are restricted from general access; (vi)engage, directly or indirectly, in transmission of\r\n              “spam,” chain letters, junk mail or any other type of unsolicited solicitation; (vii)collect, manually\r\n              or through an automatic process, information about other users without their express consent or other\r\n              information relating to the Site; (viii)submit false or misleading information to N4D; (ix)engage in any\r\n              activity that interferes with any third party’s ability to use or enjoy the Site; or (x)assist any third\r\n              party in engaging in any activity prohibited by this Agreement.\r\n\r\n              Privacy Policy\r\n              You agree to the terms of N4D’s Privacy Policy, which is incorporated by reference into this Agreement.\r\n\r\n              Intellectual Property\r\n              All materials on the Site, including without limitation, the N4D logo, design, text, graphics, other\r\n              files, and the selection and arrangement thereof are either owned by N4D or are the property of N4D’s\r\n              suppliers or licensors. You may not use such materials without permission.\r\n\r\n              NOT4DATING™ and the NOT4DATING logo™ are trademarks owned by N4D. Page headers, custom graphics, button\r\n              icons and scripts are trademarks or trade dress of N4D. You may not use any of these trademarks, trade\r\n              dress, or trade names without express permission of N4D. N4D will retain ownership of its intellectual\r\n              property rights and you may not obtain any rights therein by virtue of this Agreement or otherwise.\r\n\r\n              You will have no right to use, copy, display, perform, create derivative works from, distribute, have\r\n              distributed, transmit or sublicense from materials or content available on the Site. You may not use any\r\n              third-party intellectual property without the express written permission of the applicable third party,\r\n              except as permitted by law.\r\n\r\n              Content Posted by You\r\n              You will not post on the Site or transmit to N4D members, any obscene, abusive, harassing or illegal\r\n              material or any material that infringes or violates another party’s rights. You will not provide\r\n              misleading or false information to N4D or to other members. N4D may review and delete any content which,\r\n              in N4D’s sole discretion, violates this Agreement or which might be offensive, illegal, or that might\r\n              violate the rights or threaten the safety of other members. By posting information on the Site, you\r\n              automatically grant to N4D an irrevocable, perpetual, non-exclusive, royalty-free, worldwide license to\r\n              use the information and prepare derivative works thereof, and to grant and authorize sublicenses of the\r\n              foregoing.\r\n\r\n              Linking and Framing\r\n              You may not deep link to password-protected portions of the Site; or frame, inline link, or similarly\r\n              display any N4D content or property, including, without limitation, the Site.\r\n\r\n              Confidentiality\r\n              You may obtain information that is confidential and proprietary to N4D. Such information (“Confidential\r\n              Information”) may include, without limitation, consumer information, product information, marketing\r\n              information, and confidential communications from N4D. You shall keep all Confidential Information\r\n              confidential and not disclose it to any third party. Further, you shall not use the Confidential\r\n              Information for any purposes.\r\n\r\n              Indemnification\r\n              You agree to hold N4D and its employees, representatives, agents, attorneys, affiliates, directors,\r\n              employees, officers, managers and shareholders (the “Indemnified Parties”) harmless from any damage,\r\n              loss, cost or expense (including without limitation, attorneys’ fees and costs) incurred in connection\r\n              with any third-party claim, demand or action (“Claim”) brought or asserted against any of the\r\n              Indemnified Parties: (i)alleging facts or circumstances that would constitute a breach of any provision\r\n              of this Agreement by you or (ii)arising from, related to, or connected with your use of the Site. If you\r\n              are obligated to provide indemnification pursuant to this provision, N4D may, in its sole and absolute\r\n              discretion, control the disposition of any Claim at your sole cost and expense. Without limitation of\r\n              the foregoing, you may not settle, compromise or in any other manner dispose of any Claim without the\r\n              consent of N4D.\r\n\r\n              Disclaimers, Exclusions and Limitations\r\n              N4D PROVIDES THE ON AN “AS IS” AND “AS AVAILABLE” BASIS. N4D DOES NOT REPRESENT OR WARRANT THAT THE\r\n              SITE, ITS USE, OR ANY INFORMATION THEREFROM: (I)WILL BE UNINTERRUPTED, (II)WILL BE FREE OF DEFECTS,\r\n              INACCURACIES OR ERRORS, (III)WILL MEET YOUR REQUIREMENTS, OR (IV) WILL OPERATE IN THE CONFIGURATION OR\r\n              WITH OTHER HARDWARE OR SOFTWARE YOU USE.\r\n              N4D DOES NOT SCREEN ITS MEMBERS, CONDUCT BACKGROUND CHECKS ON ITS MEMBERS, OR CONFIRM THE ACCURACY OF\r\n              THE STATEMENTS OF ITS MEMBERS. N4D MAKES NO REPRESENTATIONS OR WARRANTIES REGARDING THE CONDUCT OF\r\n              MEMBERS. YOU AGREE TO TAKE REASONABLE PRECAUTIONS IN ALL INTERACTIONS WITH OTHER N4D MEMBERS\r\n\r\n              N4D MAKES NO WARRANTIES OTHER THAN THOSE MADE EXPRESSLY IN THIS AGREEMENT, AND HEREBY DISCLAIMS ANY AND\r\n              ALL IMPLIED WARRANTIES, INCLUDING WITHOUT LIMITATION, WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE,\r\n              MERCHANTABILITY AND NON-INFRINGEMENT.\r\n              N4DWILL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY CONSEQUENTIAL, INCIDENTAL, INDIRECT, PUNITIVE OR\r\n              SPECIAL DAMAGES (INCLUDING DAMAGES RELATING TO LOST PROFITS, LOST DATA OR LOSS OF GOODWILL) ARISING OUT\r\n              OF, RELATING TO OR CONNECTED WITH THE USE OF THE SITE, BASED ON ANY CAUSE OF ACTION, EVEN IF ADVISED OF\r\n              THE POSSIBILITY OF SUCH DAMAGES.\r\n\r\n              Limitation of Liability\r\n              EXCEPT FOR A BREACH OF A PARTY’S REPRESENTATIONS AND WARRANTIES OR IN CONNECTION WITH YOUR INDEMNITY\r\n              OBLIGATIONS UNDER THIS AGREEMENT, IN NO EVENT WILL THE LIABILITY OF EITHER PARTY IN CONNECTION WITH THIS\r\n              AGREEMENT OR THE SITE EXCEED $100.\r\n\r\n              Force Majeure\r\n              N4D will not be liable for failing to perform under this Agreement by the occurrence of any event beyond\r\n              its reasonable control, including, without limitation, a labor disturbance, an Internet outage or\r\n              interruption of service, a communications outage, failure by a service provider to N4D to perform, fire,\r\n              terrorism, natural disaster or war.\r\n\r\n              Arbitration\r\n              All disputes arising out of or relating to this Agreement (including its formation, performance or\r\n              alleged breach) or your use of the Site will be exclusively resolved under confidential binding\r\n              arbitration held in New York, New York before and in accordance with the Rules of the American\r\n              Arbitration Association. The arbitrator’s award will be binding and may be entered as a judgment in any\r\n              court of competent jurisdiction. To the fullest extent permitted by applicable law, no arbitration under\r\n              this Agreement will be joined to an arbitration involving any other party subject to this Agreement,\r\n              whether through class arbitration proceedings or otherwise. Notwithstanding the foregoing, N4D will have\r\n              the right to seek injunctive or other equitable relief in state or federal court located in New York,\r\n              New York to enforce this Agreement or prevent an infringement of a third party’s rights. In the event\r\n              equitable relief is sought, each party hereby irrevocably submits to the personal jurisdiction of such\r\n              court.\r\n\r\n              Waiver of Class Action Rights\r\n              By entering into this Agreement, you hereby irrevocably waive any right you may have to join claims with\r\n              those of others in the form of a class action or similar procedural device. Any claims arising out of,\r\n              relating to, or connected with this Agreement must be asserted individually.\r\n\r\n              Limitation of Actions\r\n              You acknowledge and agree that, regardless of any statute or law to the contrary, any claim or cause of\r\n              action you may have arising out of, relating to, or connected with your use of the Site must be filed\r\n              within one calendar year after such claim or cause of action arises, or forever be barred.\r\n\r\n              Changes to the Web Site or Service\r\n              N4D may, in its sole discretion, change, modify, suspend, make improvements to or discontinue any aspect\r\n              of the Site, temporarily or permanently, at any time without notice to you, and N4D will not be liable\r\n              for doing so. Without limiting the foregoing, and notwithstanding anything contained in this Agreement,\r\n              N4D will have the right from time to time to change the amount of the fees or institute new fees\r\n              relating to the Site. Further, N4D may impose limits on the amount of storage space for members, or\r\n              delete materials: (i)stored for an excessive period of time; (ii)that are out-of-date; or (iii)relating\r\n              to an inactive member account.\r\n\r\n              Termination\r\n              N4D will have the right to terminate your account or your access to the Web Site if it reasonably\r\n              believes you have breached any of the terms and conditions of this Agreement or N4D discontinues the\r\n              Site.\r\n\r\n              Effect of Termination\r\n              If your account is terminated, N4D may delete any web sites, files, graphics or other content or\r\n              materials relating to your use of the Site on N4D’s servers or otherwise in its possession and N4D will\r\n              have no liability to you or any third party for doing so. Following termination, you will not be\r\n              permitted to use the Site. If your account or your access to the Site is terminated, N4D reserves the\r\n              right to exercise whatever means it deems necessary to prevent unauthorized access to the Site,\r\n              including, but not limited to, technological barriers, IP mapping, and direct contact with your Internet\r\n              Service Provider.\r\n\r\n              Survival\r\n              This Agreement will survive indefinitely unless and until N4D chooses to terminate it, regardless of\r\n              whether any account you open is terminated by you or N4D or if you have the right to access or use the\r\n              Site.\r\n\r\n              This Agreement contain the entire understanding of the you and N4D regarding you and N4D regarding the\r\n              use of the Site, and supersedes all prior and contemporaneous agreements and understandings between you\r\n              and N4D regarding the use of the Site.\r\n\r\n              Notices and Electronic Communications\r\n              All notices required or permitted to be given under this Agreement will be in writing and delivered to\r\n              the other party by any of the following methods: (i)hand delivery, (ii)certified U.S. mail, return\r\n              receipt requested, postage prepaid, (iii)overnight courier, or (iv)electronic mail. If you give notice\r\n              to N4D, you must use the address shown on the Site. If N4D provides notice to you, it will use the\r\n              contact information provided by you to N4D. All notices will be deemed received and effective as\r\n              follows: (i)if by hand-delivery, on the date of delivery, (ii)if by delivery by U.S. mail, on the date\r\n              of receipt appearing on a return receipt card, (iii)if by overnight courier, on the date receipt is\r\n              confirmed by such courier service, or (iv)if by electronic mail, 24 hours after the message was sent, if\r\n              no “system error” or other notice of non-delivery is generated. Each party agrees that any notice that\r\n              it receives from the other party electronically satisfies any legal requirement that such communications\r\n              be in writing.</div>\r\n            <span class=\"under-text\"></span>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"continue-button\" (click)=\"selectTab(4, 3)\">\r\n            Accept Terms & Continue\r\n          </div>\r\n\r\n          <div class=\"previous-button\" (click)=\"previousStep()\">\r\n            Previous\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:80%\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"login-buton\">\r\n          <!-- \r\n          <div class=\"continue-button-google\">\r\n            Sign Up with Google\r\n          </div>\r\n\r\n\r\n          <div class=\"continue-button-facebook\">\r\n            Sign up with Facebook\r\n          </div> -->\r\n\r\n        </div>\r\n        <!-- <div class=\"or\">OR</div> -->\r\n\r\n        <div class=\"forms-field\">\r\n          <div class=\"form-group\">\r\n\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Email Address\" name=\"email\"\r\n              [(ngModel)]=\"email\">\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\" Confirm Email Address\" name=\"confirmemail\"\r\n              [(ngModel)]=\"confirmemail\">\r\n\r\n          </div>\r\n\r\n\r\n          <!-- <div class=\"form-group\">\r\n\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Password\" name=\"password\"\r\n              [(ngModel)]=\"password\">\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <input type=\"text\" class=\"form-control\" id=\"usr\" placeholder=\"Confirm Password\" name=\"confirmpassword\"\r\n              [(ngModel)]=\"confirmpassword\">\r\n\r\n          </div> -->\r\n        </div>\r\n        <div class=\"continue-button\"\r\n          (click)=\"submitForm(name,fname,lname,DOB,Gender,contract,meet,live,zip,activity,email,confirmemail,password,confirmpassword)\">\r\n          Continue\r\n        </div>\r\n\r\n        <div class=\"previous-button\" (click)=\"previousStep()\">\r\n          Previous\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <div class=\"progree-container\">\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar\" style=\"width:100%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"success-market\">Success! Your account has been created, and we can’t wait to help you find friends.\r\n        </div>\r\n\r\n        <div class=\"last-tab-button\" (click)=\"nextStep()\">\r\n          <div class=\"continue-button-last\">\r\n            Free 7 day Trial\r\n          </div>\r\n\r\n          <div class=\"button-last\">\r\n            <span class=\"under-text-button\">(No card required)</span>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"success-market\">Become a verified member now for ad-free app usage, unlimited instant messages, and\r\n          enhanced search</div>\r\n\r\n\r\n        <div class=\"last-tab-button\">\r\n          <div class=\"continue-button-last\" routerLink=\"/signin\">\r\n            Become Verified\r\n          </div>\r\n\r\n          <div class=\"button-last\">\r\n            <a href=\"https://not4dating.com/\"> <span class=\"under-text-button\">No Thanks! I am happy to be a basic\r\n                member and use the free website version\r\n                of not4dating. (Check your email to validate your account first).</span></a>\r\n          </div>\r\n        </div>\r\n\r\n      </mat-tab>\r\n\r\n    </mat-tab-group>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");
/* harmony import */ var _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Navigation/NavigationBar/navigationbar.module */ "./src/app/Navigation/NavigationBar/navigationbar.module.ts");











let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_8__["SignupPageRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _Navigation_NavigationBar_navigationbar_module__WEBPACK_IMPORTED_MODULE_10__["NavigationbarModule"],
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_9__["SignupPage"]],
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-sign-up {\n  display: flex;\n  flex-direction: column;\n  margin-top: 2em;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.forms-field {\n  margin: 3em 1em;\n}\n\np.register-with-us {\n  padding: 1.5em;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n\nbutton.btn.btn-success {\n  margin-bottom: 10px;\n}\n\n.chechk-box-terms {\n  margin-top: 10px;\n}\n\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #415DAE;\n}\n\n.facebook {\n  height: 2.9em;\n  width: 88%;\n}\n\n.btn-primary-google {\n  margin-bottom: 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #E62E2D;\n  height: 3em;\n  width: 88%;\n}\n\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n\nspan.button-text {\n  width: 100%;\n}\n\n.continue-button {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.signup-form-progress {\n  height: 23px;\n}\n\n.under-text {\n  color: #ada2a2;\n}\n\n.age-limit {\n  color: #ada2a2;\n}\n\n.form-control {\n  border: 1px solid;\n}\n\n.form-group {\n  margin: 1em 0em;\n}\n\n.progress {\n  display: flex;\n  height: 1.5rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n  margin: 0px 1.5em;\n  border: 1px solid;\n}\n\n.blue-button-second-tab {\n  background-color: #4472C4;\n  padding: 0.2em 2em;\n  color: white;\n  text-align: center;\n  font-size: 16px;\n  margin: 0px 0.5em;\n  border-radius: 6px;\n}\n\nbutton.btn.btn-primary {\n  margin-bottom: 0em;\n  display: flex;\n  align-items: center;\n  color: black !important;\n  justify-content: space-between;\n  background-color: transparent !important;\n  width: 100% !important;\n  height: 2.5em;\n  border: 1px solid;\n}\n\n.dropdown {\n  margin-bottom: 1em;\n}\n\nul.dropdown-menu.show {\n  width: 100%;\n}\n\na {\n  color: black;\n}\n\n.upload-photos {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-direction: column;\n  color: black;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.btn {\n  color: black;\n  padding: 12px 15px;\n  border-radius: 8px;\n  /* font-size: 20px; */\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  align-items: center;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n\n.upload-button {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0px;\n  background-color: #DFF4F5;\n  margin: 8px 0em;\n  padding-left: 1em;\n  width: 60vw;\n  border-radius: 16px;\n}\n\n.or {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 21px;\n  margin: 1em;\n}\n\n.grid-icon {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  width: 100%;\n  text-align: center;\n}\n\n.icons {\n  height: 50vh;\n  overflow: auto;\n}\n\nimg.image-icon {\n  width: 61%;\n  margin: 1em;\n}\n\n.button-blue-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #4472C4;\n  color: white;\n  padding: 0.7em;\n  border-radius: 10px;\n  margin-left: 1em;\n  margin-right: 1em;\n  font-size: 15px;\n}\n\n.terms-text {\n  height: 10vh;\n  overflow: auto;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 0.5em;\n  text-align: justify;\n  font-size: 14px;\n}\n\n.terms {\n  margin: 1em 0px;\n}\n\n.continue-button-google {\n  background-color: #F64225;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.continue-button-facebook {\n  background-color: #4472C4;\n  padding: 0.6em 2em;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  margin: 2em 1em;\n  border-radius: 6px;\n}\n\n.success-market {\n  text-align: center;\n  margin: 2em;\n  font-size: 18px;\n  margin-bottom: 0em;\n}\n\n.under-text-button {\n  color: #ada2a2;\n}\n\n.continue-button-last {\n  background-color: #54B151;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n  margin-bottom: 0px;\n}\n\n.button-last {\n  text-align: center;\n  margin: 1em 3em;\n}\n\n.previous-button {\n  background-color: #E62E2D;\n  height: 3em;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 9px;\n  margin: 2em;\n}\n\n.progree-container.ng-star-inserted {\n  position: fixed;\n  width: 100%;\n  background-color: white;\n  padding: 1.5em 0em;\n  margin: 0px;\n  margin-top: -5vh;\n}\n\n.align-date {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 15px;\n  justify-items: center;\n}\n\n.loading-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb2QvRG93bmxvYWRzL25vdDRkYXRpbmcgY29weSAzL3NyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBRUksV0FBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0FDR0o7O0FEQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREZBO0VBQ0ksYUFBQTtFQUVBLFVBQUE7QUNJSjs7QURGQTtFQUVJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLFVBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtBQ0lKOztBREZBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0FDTUo7O0FESkE7RUFDSSxjQUFBO0FDT0o7O0FETEE7RUFDSSxjQUFBO0FDUUo7O0FETkE7RUFDSSxpQkFBQTtBQ1NKOztBRFBBO0VBQ0ksZUFBQTtBQ1VKOztBRE5BO0VBRUksYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNTSjs7QUROQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1NKOztBRFBBO0VBQ0csa0JBQUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ1VKOztBRFJBO0VBQ0ksa0JBQUE7QUNXSjs7QURUQTtFQUNJLFdBQUE7QUNZSjs7QURUQTtFQUVJLFlBQUE7QUNXSjs7QURUQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ1lKOztBRFRBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDWUo7O0FEVEU7RUFDRSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNXSjs7QURQRTtFQUVFLGdCQUFBO0VBQ0Ysa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNTRjs7QURQRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNVSjs7QURSQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1dKOztBRFRBO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDWUo7O0FEVEE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ1lKOztBRFZBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNhSjs7QURYQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNjSjs7QURaQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNlSjs7QURiQTtFQUNJLGVBQUE7QUNnQko7O0FEZEE7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2dCSjs7QURkQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDaUJKOztBRGZBO0VBRUksY0FBQTtBQ2lCSjs7QURmQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDa0JKOztBRGhCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ21CSjs7QURoQkE7RUFFSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNrQko7O0FEaEJBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDbUJKOztBRGpCQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ29CSjs7QURsQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ3FCSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc2lnbi11cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxufVxyXG4uZnVsbC13aWR0aFxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZm9ybXMtZmllbGR7XHJcbiAgICBtYXJnaW46IDNlbSAxZW07XHJcbn1cclxucC5yZWdpc3Rlci13aXRoLXVzIHtcclxuICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG5idXR0b24uYnRuLmJ0bi1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNoZWNoay1ib3gtdGVybXMge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnNvY2lhbC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTVEQUVcclxufVxyXG4uZmFjZWJvb2sge1xyXG4gICAgaGVpZ2h0OiAyLjllbTtcclxuIFxyXG4gICAgd2lkdGg6IDg4JVxyXG59XHJcbi5idG4tcHJpbWFyeS1nb29nbGVcclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTYyRTJEO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcblxyXG4gICAgd2lkdGg6IDg4JVxyXG59XHJcblxyXG5wLm9yLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG59XHJcbnNwYW4uYnV0dG9uLXRleHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW46IDJlbTtcclxufVxyXG4uc2lnbnVwLWZvcm0tcHJvZ3Jlc3N7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbn1cclxuLnVuZGVyLXRleHQge1xyXG4gICAgY29sb3I6ICNhZGEyYTI7XHJcbn1cclxuLmFnZS1saW1pdHtcclxuICAgIGNvbG9yOiAjYWRhMmEyOztcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbjogMWVtIDBlbTtcclxufVxyXG5cclxuXHJcbi5wcm9ncmVzcyB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICBtYXJnaW46IDBweCAxLjVlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG5cclxufVxyXG4uYmx1ZS1idXR0b24tc2Vjb25kLXRhYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xyXG4gICAgcGFkZGluZzogMC4yZW0gMmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwcHggMC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgIG1hcmdpbi1ib3R0b206IDBlbTsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuLmRyb3Bkb3duIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG51bC5kcm9wZG93bi1tZW51LnNob3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbn1cclxuYVxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnVwbG9hZC1waG90b3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi51cGxvYWQtYnRuLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmJ0biB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgXHJcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAvKiBmb250LXNpemU6IDIwcHg7ICovXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIC51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT1maWxlXSB7XHJcblxyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLnVwbG9hZC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkY0RjU7XHJcbiAgICBtYXJnaW46IDhweCAwZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG4ub3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBtYXJnaW46IDFlbTtcclxufVxyXG4uZ3JpZC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4uaWNvbnMge1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuaW1nLmltYWdlLWljb24ge1xyXG4gICAgd2lkdGg6IDYxJTtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcbi5idXR0b24tYmx1ZS10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC43ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi50ZXJtcy10ZXh0IHtcclxuICAgIGhlaWdodDogMTB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi50ZXJtcyB7XHJcbiAgICBtYXJnaW46IDFlbSAwcHg7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbi1nb29nbGVcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2NDIyNTtcclxuICAgIHBhZGRpbmc6IDAuNmVtIDJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMmVtIDFlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4uY29udGludWUtYnV0dG9uLWZhY2Vib29rXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XHJcbiAgICBwYWRkaW5nOiAwLjZlbSAyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDJlbSAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuLnN1Y2Nlc3MtbWFya2V0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMGVtO1xyXG59XHJcbi51bmRlci10ZXh0LWJ1dHRvblxyXG57XHJcbiAgICBjb2xvcjogI2FkYTJhMjtcclxufVxyXG4uY29udGludWUtYnV0dG9uLWxhc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTUxO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmJ1dHRvbi1sYXN0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMWVtIDNlbTtcclxuXHJcbn1cclxuLnByZXZpb3VzLWJ1dHRvblxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTYyRTJEO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbn1cclxuLnByb2dyZWUtY29udGFpbmVyLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEuNWVtIDBlbTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTV2aDtcclxufVxyXG4uYWxpZ24tZGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH0iLCIubWFpbi1zaWduLXVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybXMtZmllbGQge1xuICBtYXJnaW46IDNlbSAxZW07XG59XG5cbnAucmVnaXN0ZXItd2l0aC11cyB7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXN1Y2Nlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2hlY2hrLWJveC10ZXJtcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zb2NpYWwtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNURBRTtcbn1cblxuLmZhY2Vib29rIHtcbiAgaGVpZ2h0OiAyLjllbTtcbiAgd2lkdGg6IDg4JTtcbn1cblxuLmJ0bi1wcmltYXJ5LWdvb2dsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTYyRTJEO1xuICBoZWlnaHQ6IDNlbTtcbiAgd2lkdGg6IDg4JTtcbn1cblxucC5vci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI3cHg7XG59XG5cbnNwYW4uYnV0dG9uLXRleHQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NEIxNTE7XG4gIGhlaWdodDogM2VtO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbjogMmVtO1xufVxuXG4uc2lnbnVwLWZvcm0tcHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDIzcHg7XG59XG5cbi51bmRlci10ZXh0IHtcbiAgY29sb3I6ICNhZGEyYTI7XG59XG5cbi5hZ2UtbGltaXQge1xuICBjb2xvcjogI2FkYTJhMjtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbjogMWVtIDBlbTtcbn1cblxuLnByb2dyZXNzIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMS41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIG1hcmdpbjogMHB4IDEuNWVtO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmJsdWUtYnV0dG9uLXNlY29uZC10YWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICBwYWRkaW5nOiAwLjJlbSAyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMHB4IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tYm90dG9tOiAwZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMi41ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uZHJvcGRvd24ge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbnVsLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udXBsb2FkLXBob3RvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnVwbG9hZC1idG4td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLyogZm9udC1zaXplOiAyMHB4OyAqL1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnVwbG9hZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERkY0RjU7XG4gIG1hcmdpbjogOHB4IDBlbTtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHdpZHRoOiA2MHZ3O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4ub3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW46IDFlbTtcbn1cblxuLmdyaWQtaWNvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbnMge1xuICBoZWlnaHQ6IDUwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5pbWcuaW1hZ2UtaWNvbiB7XG4gIHdpZHRoOiA2MSU7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4uYnV0dG9uLWJsdWUtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ3MkM0O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuN2VtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGVybXMtdGV4dCB7XG4gIGhlaWdodDogMTB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGVybXMge1xuICBtYXJnaW46IDFlbSAwcHg7XG59XG5cbi5jb250aW51ZS1idXR0b24tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2NDIyNTtcbiAgcGFkZGluZzogMC42ZW0gMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDJlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDcyQzQ7XG4gIHBhZGRpbmc6IDAuNmVtIDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAyZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5zdWNjZXNzLW1hcmtldCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyZW07XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMGVtO1xufVxuXG4udW5kZXItdGV4dC1idXR0b24ge1xuICBjb2xvcjogI2FkYTJhMjtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbi1sYXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0QjE1MTtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgbWFyZ2luOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmJ1dHRvbi1sYXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDFlbSAzZW07XG59XG5cbi5wcmV2aW91cy1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTYyRTJEO1xuICBoZWlnaHQ6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW46IDJlbTtcbn1cblxuLnByb2dyZWUtY29udGFpbmVyLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMS41ZW0gMGVtO1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogLTV2aDtcbn1cblxuLmFsaWduLWRhdGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBncmlkLWdhcDogMTVweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */");

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");











let SignupPage = class SignupPage {
    constructor(http, zone, alertController, sanitizer, filed, fileChooser, base64, device, camera, FilePath, changeDetector) {
        this.http = http;
        this.zone = zone;
        this.alertController = alertController;
        this.sanitizer = sanitizer;
        this.filed = filed;
        this.fileChooser = fileChooser;
        this.base64 = base64;
        this.device = device;
        this.camera = camera;
        this.FilePath = FilePath;
        this.changeDetector = changeDetector;
        this.maxNumberOfTabs = 5;
        this.selectedIndex = 0;
        this.selectedFile = null;
        //file:any
        this.filepath = {};
        this.imageContinue = false;
        this.CheckBox = false;
        this.now = new Date();
        this.isLoading = false;
        this.win = window;
    }
    ngOnInit() { }
    tabChanged(tabChangeEvent) {
        this.selectedIndex = tabChangeEvent.index;
    }
    nextStep() {
        this.selectedIndex += 1;
    }
    previousStep() {
        this.selectedIndex -= 1;
    }
    selectTab(nextIndex, presentIndex) {
        //Screen 1
        if (presentIndex == 0) {
            if (this.name == null) {
                this.presentAlert();
            }
            else if (this.fname == null) {
                this.presentAlert();
            }
            else if (this.lname == null) {
                this.presentAlert();
            }
            else if (this.DOB == null) {
                this.presentAlert();
            }
            else if (Math.floor(Math.abs(Date.now() - new Date(this.DOB).getTime()) /
                (1000 * 3600 * 24) /
                365.25) < 18) {
                this.ageAlert();
            }
            else if (this.CheckBox == false) {
                this.checkBoxAlert();
            }
            else {
                this.selectedIndex = nextIndex;
            }
        }
        else if (presentIndex == 1) {
            if (nextIndex > presentIndex) {
                if (this.Gender == null) {
                    this.presentAlert();
                }
                else if (this.contract == null) {
                    this.presentAlert();
                }
                else if (this.myself == null) {
                    this.presentAlert();
                }
                else if (this.meet == null) {
                    this.presentAlert();
                }
                else {
                    this.selectedIndex = nextIndex;
                }
            }
            else {
                this.selectedIndex = nextIndex;
            }
        }
        else if (presentIndex == 2) {
            if (nextIndex > presentIndex) {
                if (this.picture == null) {
                    this.presentAlert();
                }
                else {
                    console.log("next select");
                    this.selectedIndex = nextIndex;
                    this.changeDetector.detectChanges();
                }
            }
        }
        else if (presentIndex == 3) {
            if (nextIndex > presentIndex) {
                if (this.live == null) {
                    this.presentAlert();
                }
                else if (this.zip == null) {
                    this.presentAlert();
                }
                else {
                    this.selectedIndex = nextIndex;
                }
            }
        }
        else if (presentIndex == 4) {
            if (nextIndex > presentIndex) {
                if (this.email == null) {
                    this.presentAlert();
                }
                if (this.confirmemail == null) {
                    this.presentAlert();
                }
                else if (this.password == null) {
                    this.presentAlert();
                }
                else if (this.confirmpassword == null) {
                    this.presentAlert();
                }
            }
        }
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: "All Fields are required",
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    ageAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: "Age Must be 18+",
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    checkBoxAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: "Confirm your age",
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    onUpload(picture) {
        this.isLoading = true;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/x-www-form-urlencoded");
        this.uploadData = {
            file: this.base64textString,
            filename: picture,
            filepath: "public://" + picture,
        };
        this.http
            .post("https://gowebtutorial.com/api/json/file/", this.uploadData)
            .subscribe((rest) => {
            this.Picurl = rest;
            console.log(this.Picurl);
            // Image URL
            this.displayImage =
                "https://gowebtutorial.com/sites/default/files/" +
                    this.uploadData.filename;
            console.log(this.displayImage);
            // Show next button
            this.imageContinue = true;
            this.isLoading = false;
            this.changeDetector.detectChanges();
        });
        console.log(this.uploadData);
    }
    //Form
    submitForm(name, fname, lname, DOB, Gender, contract, meet, live, zip, activity, email, confirmemail, password, confirmpassword) {
        this.getImageObject(name, fname, lname, DOB, Gender, contract, meet, live, zip, activity, email, confirmemail, password, confirmpassword);
    }
    getImageObject(name, fname, lname, DOB, Gender, contract, meet, live, zip, activity, email, confirmemail, password, confirmpassword) {
        this.isLoading = true;
        this.http
            .get("https://gowebtutorial.com/api/json/file/" + this.Picurl.fid)
            .subscribe((res) => {
            this.picturesUrl = res;
            console.log(this.picturesUrl);
            this.submitDetails(name, fname, lname, DOB, Gender, contract, meet, live, zip, activity, email, confirmemail, password, confirmpassword);
        });
    }
    submitDetails(name, fname, lname, DOB, Gender, contract, meet, live, zip, activity, email, confirmemail, password, confirmpassword) {
        let ts = Math.round(new Date().getTime() / 1000);
        let submitObject = {
            name: name,
            mail: email,
            conf_mail: confirmemail,
            timezone: ts,
            login: ts,
            access: ts,
            field_first_name: {
                und: [
                    {
                        value: fname,
                    },
                ],
            },
            field_last_name: {
                und: [
                    {
                        value: lname,
                    },
                ],
            },
            field_zip_code: {
                und: [
                    {
                        postal_code: zip,
                        country: live,
                    },
                ],
            },
            field_birth_date: {
                und: DOB,
            },
            field_gender: {
                und: Gender,
            },
            field_activities_interests: {
                und: activity,
            },
            field_look_meet: {
                und: meet,
            },
            picture_upload: this.picturesUrl,
            picture: this.picturesUrl,
            field_user_avatar: {
                und: [this.picturesUrl],
            },
            field_want_contarct: {
                und: contract,
            },
        };
        console.log(submitObject);
        this.http
            .post("https://gowebtutorial.com/api/json/user/register", submitObject)
            .subscribe((data) => {
            this.post = data;
            console.log(data);
            if (this.post.uid) {
                this.isLoading = false;
                this.nextStep();
                this.correctAlert();
            }
            else {
                alert(this.post);
            }
        });
    }
    correctAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const correct = yield this.alertController.create({
                message: " Account is created",
                buttons: ["OK"],
            });
            yield correct.present();
        });
    }
    onCheckboxChange(e) {
        if (e.target.checked) {
            this.CheckBox = true;
        }
        else {
            this.CheckBox = false;
        }
    }
    CheckDOB() {
        this.age = Math.floor(Math.abs(Date.now() - new Date(this.DOB).getTime()) /
            (1000 * 3600 * 24) /
            365.25);
    }
    openCamera() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            // Start loader
            this.isLoading = true;
            this.base64.encodeFile(imageData).then((base64File) => {
                //Filename
                let timestamp = Math.floor(Date.now() / 1000);
                this.fileName = this.name + "_profile_image_" + timestamp + ".jpg";
                //Base 64 String
                let removeString = "data:image/*;charset=utf-8;base64,";
                this.base64textString = base64File.replace(removeString, "");
                this.picture = this.fileName;
                this.onUpload(this.picture);
            }, (err) => {
                console.log(err);
            });
        }, (err) => {
            // Handle error
        });
    }
    filechooser() {
        this.fileChooser.open().then((fileuri) => {
            // Start loader
            this.isLoading = true;
            let imagePath = this.win.Ionic.WebView.convertFileSrc(fileuri);
            this.displayImage = imagePath;
            this.FilePath.resolveNativePath(fileuri).then((filePath) => {
                fetch(imagePath).then((res) => {
                    res.blob().then((blob) => {
                        function getFileReader() {
                            const fileReader = new FileReader();
                            const zoneOriginalInstance = fileReader["__zone_symbol__originalInstance"];
                            return zoneOriginalInstance || fileReader;
                        }
                        let newInstance = getFileReader();
                        newInstance.onload = function () {
                            // Is it JPG or PNG
                            let base64data = newInstance.result.toString();
                            if (base64data.includes("data:image/jpeg;base64,")) {
                                // File Name
                                let timestamp = Math.floor(Date.now() / 1000);
                                this.fileName =
                                    this.name + "_profile_image_" + timestamp + ".jpg";
                                //Base 64 string
                                let removeString = "data:image/jpeg;base64,";
                                this.base64textString = base64data.replace(removeString, "");
                                console.log(this.base64textString);
                            }
                            else if (base64data.includes("data:image/png;base64,")) {
                                let timestamp = Math.floor(Date.now() / 1000);
                                this.fileName =
                                    this.name + "_profile_image_" + timestamp + ".png";
                                //Base 64 string
                                let removeString = "data:image/png;base64,";
                                this.base64textString = base64data.replace(removeString, "");
                                console.log(this.base64textString);
                            }
                            this.picture = this.fileName;
                            this.changeDetector.detectChanges();
                            this.onUpload(this.picture);
                        }.bind(this);
                        newInstance.readAsDataURL(blob);
                    });
                });
            });
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["FileChooser"] },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__["Base64"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-signup",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
        _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["FileChooser"],
        _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__["Base64"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map