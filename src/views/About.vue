<template>
  <v-container
    fluid
    grid-list-xl
    fill-height>
    <v-layout
      justify-center
      align-center
    >
      <v-flex xs12>
        <material-card color="bgLight" class="bioCard">            
            <v-card-text class="text-xs-center">
              <v-layout 
                row
                wrap
              >
              <v-flex 
              sm12
              md9
              >
                <h3 class="mt-4">
                  I'm Chris Clemons, a .NET developer based in Seattle. 
                </h3>
                <h3 class="mt-4">
                  I've been programming professionally since 2016, and obsessed with music since I found out I had ears.
                </h3>
                <h3 class="mt-4">
                  DoWhileLoops is meant to showcase work that I have done in both fields, as well as posts for fellow enthusiasts.
                </h3>
                <h3 class="mt-4">
                  Feel free to reach out at
                  <a href="mailto:dowhile@dowhileloops.com" class="bioLink">dowhile@dowhileloops.com</a>
                  or
                  <a href="https://www.linkedin.com/in/christopher-clemons-53839b107" target="_blank" class="bioLink">
                    LinkedIn.
                  </a>
                </h3>
                <div class="text-xs-center mt-4">
                  <v-btn
                    color="splash"
                    round
                    class="font-weight-light bioBtn"
                    @click.stop="dialog = true"
                  >
            <h4>Here's my resume</h4>
            </v-btn>
                </div>
              </v-flex>
              <v-flex
              sm12
              md3>
                <v-avatar
                slot="offset"
                class="mx-auto d-block"
                size="200"
                >
                <img
                  src="../assets/CorporateMug.jpg"
                >
                </v-avatar>
              </v-flex>
              </v-layout>
          </v-card-text>
        </material-card>
        <v-dialog
          v-model="dialog"
          max-width="1000"
        >
          <v-card class="bioCard">
            <div class="ml-3 mr-3">
            <h2>Chris Clemons</h2>
            <v-layout 
                row
                wrap
              >
              <v-flex 
              xs12
              >
              <p>Seattle, WA &mdash; dowhile@dowhileloops.com</p>
              </v-flex>
              </v-layout>
            <p class="italics">Technology professional with over three years of full stack experience, including C#, JavaScript, SQL, and Azure Cloud Services. 
              Proven ability to lead development efforts on custom projects for large clients.</p>
            <h3 class="sectionHeader">Experience</h3>
            <h4 class="jobTitle">Systems Support Engineer, eventcore</h4>
            <p class="jobInfo">September 2018 &ndash; Present</p>
            <p class="jobDescription italics">eventcore is a ~75 employee firm building customized event registration and meeting management solutions.</p>
            <ul>
              <li class="liResume">Chosen as one of the first three engineers to spearhead a new live engineering team, tasked with triaging and solving complex and emergent problems in the production environment.</li>
              <li class="liResume">Implement new services and optimize existing infrastructure within Azure, leading to an increase in app performance and reduction in workload for less experienced teams. This included migrating the existing Azure B2C setup from too many WYSIWYG policies  into a fully generic and custom Identity Experience Framework solution.</li>
              <li class="liResume">Work directly with sales and clientele to provide technical design and scoping of custom requests, ensuring we won’t sell a major feature without proper requirements and an accurate timeline.</li>
              <li class="liResume">Resolve issues with existing in-house administrative tool, reworking UI to leverage our backend data. Doing so reduces the amount of time our Project Managers and Developers spend changing configuration.</li>
            </ul>
            <h4 class="jobTitle">Web Developer, eventcore</h4>
            <p class="jobInfo">March 2016 &ndash; September 2018</p>
            <ul>
              <li class="liResume">Developed custom web applications and user flows of varying complexity for large corporate events. Projects had an average of 15,000 users, with an average value of $500,000. The client list included Microsoft, Tableau, Zillow, AT&amp;T, and Amazon.</li>
              <li class="liResume">Gathered and interpreted business requirements. Chose the technical design direction based on UI specification and special client requests for over 50 custom web apps.</li>
              <li class="liResume">Refactored and optimized older web apps in need of maintenance rather than providing temporary hot fixes, leading to an increase in client satisfaction.</li>
              <li class="liResume">Provided technical leadership while supporting events onsite by owning the products I built and equipping my team with the documentation and knowledge they required in case of an emergency.</li>
            </ul>
            <h4 class="jobTitle">Professional Musician, Self Employed</h4>
            <p class="jobInfo">Jan 2001 &ndash; Dec 2014</p>
            <p class="jobDescription italics">I performed and recorded independently as a trumpeter, guitarist, and vocalist across the breadth of musical genres for over a decade.</p>
            <ul>
              <li class="liResume">Developed a six piece band (Shaky Trade) into a professional performing and recording ensemble with 3 publicly released albums of original material.</li>
              <li class="liResume">Managed, led, and performed in several music groups. Organized rehearsals, travel, sound equipment, and all booking related matters.</li>
            </ul>
            <h4 class="jobTitle">Senior Instrument Technician, Amer Sports</h4>
            <p class="jobInfo">Dec 2008 &ndash; May 2013</p>
            <p class="jobDescription italics">Amer Sports is a sporting goods company, with brands including Wilson, Precor, Arc-teryx, Suunto, and Salomon.</p>
            <ul>
              <li class="liResume">Revised processes to cut the repair backlog from 5 weeks down to same-day evaluation.</li>
              <li class="liResume">Handle client escalations. Serve as liason between the customer service team and company headquarters in Vantaa, Finland.</li>
              <li class="liResume">Provided leadership, training, and advanced repair to a team of technicians.</li>
            </ul>

            <h3 class="sectionHeader">Education</h3>
            <h4 class="jobTitle">Microsoft 70-487 – Developing Microsoft Azure and Web Services, Microsoft Certification (2019)</h4>
            <h4 class="jobTitle">Microsoft 70-483 – Programming In C#, Microsoft Certification (2018)</h4>
            <h4 class="jobTitle">Associates of Applied Science in Computer Science, Renton Technical College, Renton WA (2016)</h4>
            <h4 class="jobTitle">Bachelor of Fine Arts in Music Performance, Weber State University, Ogden UT (2005)</h4>

            <h3 class="sectionHeader">Skills</h3>
            <h4 class="jobTitle">Code: C#, JavaScript, SQL, Vue, jQuery, Knockout, HTML, CSS</h4>
            <h4 class="jobTitle">Frameworks/Protocols: ASP.NET, MVC, Web Forms, Entity Framework, OpenID Connect, OAuth 2.0, Git, TFS</h4>
            <h4 class="jobTitle">Tools: Azure Cloud Services, Visual Studio, SQL Server, npm, Microsoft Office, Postman, PowerShell</h4>
        </div>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
    name: 'About',
    data: () => ({
      dialog: false,
      absolute: false,
      opacity: 0.46,
      overlay: false,
      zIndex: 5
    }),
    methods: {
      showResume: function () {
        console.log('you got it')
      }
    }
}
</script>

<style>
.jobTitle{
  font-weight: bold !important;
}
.sectionHeader{
  text-decoration:underline;
}
.italics{
  font-style: italic;
}
.liResume{
  /* font-size: 18px; */
  color: #f5f5f5;
}
.bioLink{
  color: #2c84f6 !important;
}
.bioCard{
  background-color: #62727b !important;
}
.bioBtn{
  height:75px;
  width: 400px;
}

@media all and (max-width: 550px) {
  .bioBtn{
  height:75px;
  width: 250px;
  }
}
</style>
