const UI_UX = `
<div style="display: flex; flex-direction: column; gap: 1rem;">
  <div>
    <h2>
      Subject: <b>Congratulations! You've Been Selected for the {position} Designer Position</b>
    </h2>
  </div>
  
  <div>
    <span>Dear <b>{fname} {lname}</b>,</span>
    <p>
      We are thrilled to inform you that you have been selected for the
      position of UI/UX Designer at Amnil Technology. Congratulations! Your design skills,
      creativity, and passion for user experience stood out among the many impressive
      candidates we reviewed. We believe you will play a crucial role in crafting exceptional
      user interfaces and experiences for our products.
    </p>
  </div>
  
  <div>
    <p>
      Your dedication to user-centric design and your ability to translate complex ideas into
      intuitive interfaces have truly impressed us. We are excited to welcome you to our team
      of design enthusiasts who are dedicated to creating visually appealing and user-friendly solutions.
    </p>
  </div>
  
  <div>
    <p>
      As part of our UI/UX team, you'll have the opportunity to collaborate with cross-functional
      teams, contribute to meaningful projects, and influence the way our products engage with users.
      Your insights and creativity will be pivotal in delivering outstanding user experiences.
    </p>
  </div>
  
  <div>
    <p>
      We encourage you to immerse yourself in our company culture and values. At Amnil Technology,
      we embrace innovation, teamwork, and a commitment to excellence. By working together, we can
      drive the evolution of user experiences and set new industry standards.
    </p>
  </div>
  
  <div>
    <p>
      Congratulations once again on this achievement! We eagerly anticipate your contribution to our
      team and the exceptional work we will accomplish together. If you have any questions or need further
      information as you transition into your new role, please don't hesitate to contact us.
    </p>
  </div>
  
  <div>
    <br />
    <br />
    <b>
      Warm regards, <br />
    </b>
    {HR Name} <br />
    Human Resources <br />
    Amnil Technology <br />
    Lalitpur 44600 <br />
    01-5431784
  </div>
</div>


`;

const React_Template = `
<div className="flex flex-col gap-4">
<div>
<h2>
  Subject: <b> Congratulations! You've Been Selected for the {position} Job    </b>
</h2>
</div>
<br /> <br />
<div>
<span>Dear <b>{fname} {lname}</b>,</span>
<br />      
<p>
  We are thrilled to inform you that you have been selected for the
  position of {position} at Amnil Technology. Congratulations! Your skills,
  experience, and enthusiasm stood out among the many impressive
  candidates we reviewed. We believe you will make a valuable addition
  to our team and contribute significantly to our projects.
</p>
</div>
<div>
<p>
  Your dedication and hard work have paid off, and we are excited to welcome
  you to our organization. As part of our team, you'll have the opportunity to
  work on exciting projects and collaborate with talented colleagues. We are
  confident that your contributions will have a positive impact on our goals and
  objectives.
</p>
</div>
<br /> 
<div>
<p>
  As you prepare to join us, we encourage you to take some time to familiarize
  yourself with our company culture and values. We value innovation, teamwork,
  and a commitment to excellence. Together, we can achieve great things and
  drive our company forward.
</p>
</div>
<br /> 
<div>
<p>
  Once again, congratulations on this achievement! We are looking forward to
  having you on our team and to the exciting work we will accomplish together.
  Please feel free to reach out to us if you have any questions or need further
  information as you transition into your new role.
</p>
</div>
<div>
<br /> <br />
<b>
Warm regards, <br />
</b>
{First Name} <br />
Human Resources <br />
Amnil Technology <br />
Lalitpur 44600 <br />
01-5431784
</div>
  </div>

`;
const DotNet_Template = `

<div className="flex flex-col gap-4">
    <div>
      <h2>
        Subject: Congratulations! You've Been Selected for {position} the Job
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo itaque autem fugit? Repellat voluptatum recusandae, odio numquam dolorum atque cum quae? Ex vel aliquam eveniet veritatis saepe laborum voluptates atque.</p>
    </div>
    <div>
    <span>Dear <b>{fname} {lname}</b>,</span>
      <p>
        We are thrilled to inform you that you have been selected for the
     job at Amnil Technology. Congratulations! Your skills,
        experience, and enthusiasm stood out among the many impressive
        candidates we reviewed. We believe you will make a valuable addition
        to our team and contribute significantly to our projects.
      </p>
    </div>
    <div>
      <p>
        congratulations on this achievement! We are looking forward to
        having you on our team and to the exciting work we will accomplish
        together.
      </p>
    </div>
    <div>
      Warm regards, <br /> {First Name} <br /> Human Resources  <br /> Amnil Technology  Lalitpur 44600<br />  01-5431784
    </div>
  </div>

`;
const Rejection_Template = `
<div class="content">
            <p>Greeting,</p>
            <p>Thank you for interviewing for {position} on {date of interview}. It was a tough decision, but we selected another candidate for the position.</p>
            <p>Our team was particularly impressed with your {skills}, but we felt you lacked experience in {skill/experience}. We’d recommend {taking a course/obtaining a certificate/gaining project experience} to improve.</p>
            <p>We would like to stay in touch with you for future opportunities that might be a good fit. Please follow our social handles for updates on future job posts.</p>
            <p>Thanks again for taking the time to apply and coming to meet the team. We wish you the best of luck in your job search and thank you for your interest in our company.</p>
            <p>Sincerely,</p>
            <p>{Your name}</p>
        </div>
`;

export const Template = [
  { key: 1, value: UI_UX, name: "UI_UX_Template" },
  { key: 2, value: React_Template, name: "React_Template" },
  { key: 3, value: DotNet_Template, name: "DotNet_Template" },
  { key: 4, value: Rejection_Template, name: "Rejection_Template" },
];
