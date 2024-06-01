document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("user-form");
  const adviceDiv = document.getElementById("advice");

  userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const interests = document.getElementById("interests").value.split(",");

    const advice = getCareerAdvice(interests);
    adviceDiv.innerHTML = advice;
  });
});

function getCareerAdvice(interests) {
  // Enhanced career options with resources and additional links
  const careerOptions = {
    programming: {
      title: "Software Developer",
      keywords: [
        "programming",
        "coding",
        "software development",
        "web development",
        "technology",
        "engineer",
      ],
      resources: [
        {
          name: "Codecademy",
          url: "https://www.codecademy.com/learn/paths/web-development",
        },
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
      ],
      moreInfo: {
        name: "Explore Software Development",
        url: "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
      },
    },
    design: {
      title: "UI/UX Designer",
      keywords: [
        "design",
        "ui",
        "ux",
        "user experience",
        "graphic design",
        "technology",
        "engineer",
      ],
      resources: [
        {
          name: "Interaction Design Foundation",
          url: "https://www.interaction-design.org/",
        },
        {
          name: "Coursera",
          url: "https://www.coursera.org/courses?query=ui%20ux%20design",
        },
      ],
      moreInfo: {
        name: "Explore UI/UX Design",
        url: "https://www.interaction-design.org/literature/topics/ui-design",
      },
    },
    marketing: {
      title: "Digital Marketer",
      keywords: [
        "marketing",
        "digital marketing",
        "social media",
        "seo",
        "content marketing",
        "technology",
      ],
      resources: [
        {
          name: "HubSpot Academy",
          url: "https://academy.hubspot.com/courses/digital-marketing",
        },
        {
          name: "Google Digital Garage",
          url: "https://learndigital.withgoogle.com/digitalgarage",
        },
      ],
      moreInfo: {
        name: "Explore Digital Marketing",
        url: "https://www.digitalmarketing.org/blog/digital-marketing",
      },
    },
    "data analysis": {
      title: "Data Scientist",
      keywords: [
        "data analysis",
        "data science",
        "big data",
        "machine learning",
        "technology",
        "engineer",
      ],
      resources: [
        { name: "DataCamp", url: "https://www.datacamp.com/" },
        {
          name: "Coursera",
          url: "https://www.coursera.org/specializations/jhu-data-science",
        },
      ],
      moreInfo: {
        name: "Explore Data Science",
        url: "https://www.datasciencecentral.com/profiles/blogs/data-science-career-path-education-salaries-tips-and-more",
      },
    },
    writing: {
      title: "Content Writer",
      keywords: [
        "writing",
        "content writing",
        "copywriting",
        "creative writing",
      ],
      resources: [
        { name: "Udemy", url: "https://www.udemy.com/topic/content-writing/" },
        {
          name: "LinkedIn Learning",
          url: "https://www.linkedin.com/learning/topics/content-writing",
        },
      ],
      moreInfo: {
        name: "Explore Content Writing",
        url: "https://thewritelife.com/how-to-become-a-content-writer/",
      },
    },
    teaching: {
      title: "Educator",
      keywords: ["teaching", "education", "teacher", "tutoring", "instruction"],
      resources: [
        { name: "Khan Academy", url: "https://www.khanacademy.org/" },
        {
          name: "edX",
          url: "https://www.edx.org/course/leading-educational-innovation-and-improvement",
        },
      ],
      moreInfo: {
        name: "Explore Teaching Careers",
        url: "https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm",
      },
    },
    healthcare: {
      title: "Healthcare Professional",
      keywords: [
        "healthcare",
        "medicine",
        "nursing",
        "doctor",
        "nurse",
        "medical",
      ],
      resources: [
        { name: "Coursera", url: "https://www.coursera.org/browse/health" },
        {
          name: "edX",
          url: "https://www.edx.org/course/subject/health-safety",
        },
      ],
      moreInfo: {
        name: "Explore Healthcare Careers",
        url: "https://www.bls.gov/ooh/healthcare/home.htm",
      },
    },
    finance: {
      title: "Financial Analyst",
      keywords: [
        "finance",
        "financial analysis",
        "investment",
        "banking",
        "accounting",
      ],
      resources: [
        {
          name: "Coursera",
          url: "https://www.coursera.org/specializations/financial-management",
        },
        {
          name: "edX",
          url: "https://www.edx.org/course/introduction-to-corporate-finance",
        },
      ],
      moreInfo: {
        name: "Explore Financial Analysis",
        url: "https://www.bls.gov/ooh/business-and-financial/financial-analysts.htm",
      },
    },
    engineering: {
      title: "Engineer",
      keywords: [
        "engineering",
        "mechanical engineering",
        "electrical engineering",
        "civil engineering",
        "engineer",
      ],
      resources: [
        {
          name: "Coursera",
          url: "https://www.coursera.org/browse/engineering",
        },
        { name: "edX", url: "https://www.edx.org/learn/engineering" },
      ],
      moreInfo: {
        name: "Explore Engineering Careers",
        url: "https://www.bls.gov/ooh/architecture-and-engineering/home.htm",
      },
    },
    entrepreneurship: {
      title: "Entrepreneur",
      keywords: ["entrepreneurship", "startup", "business", "innovation"],
      resources: [
        {
          name: "Coursera",
          url: "https://www.coursera.org/specializations/wharton-entrepreneurship",
        },
        {
          name: "edX",
          url: "https://www.edx.org/course/entrepreneurship-in-emerging-economies",
        },
      ],
      moreInfo: {
        name: "Explore Entrepreneurship",
        url: "https://www.entrepreneur.com/",
      },
    },
    law: {
      title: "Lawyer",
      keywords: ["law", "legal", "lawyer", "attorney", "paralegal"],
      resources: [
        {
          name: "Coursera",
          url: "https://www.coursera.org/browse/social-sciences/law",
        },
        { name: "edX", url: "https://www.edx.org/course/subject/law" },
      ],
      moreInfo: {
        name: "Explore Legal Careers",
        url: "https://www.bls.gov/ooh/legal/home.htm",
      },
    },
    photography: {
      title: "Photographer",
      keywords: ["photography", "photo", "visual arts", "camera"],
      resources: [
        { name: "Photography Life", url: "https://photographylife.com/" },
        {
          name: "CreativeLive",
          url: "https://www.creativelive.com/photography",
        },
      ],
      moreInfo: {
        name: "Explore Photography Careers",
        url: "https://www.bls.gov/ooh/media-and-communication/photographers.htm",
      },
    },
    acting: {
      title: "Actor/Actress",
      keywords: ["acting", "theatre", "drama", "performance", "stage", "actor"],
      resources: [
        { name: "MasterClass", url: "https://www.masterclass.com/" },
        { name: "Backstage", url: "https://www.backstage.com/" },
      ],
      moreInfo: {
        name: "Explore Acting Careers",
        url: "https://www.bls.gov/ooh/entertainment-and-sports/actors.htm",
      },
    },
    singing: {
      title: "Singer",
      keywords: ["singing", "vocal", "music", "performing arts"],
      resources: [
        { name: "Voice Lessons", url: "https://www.voicelessons.com/" },
        {
          name: "Berklee Online",
          url: "https://online.berklee.edu/music-degrees/vocal/",
        },
      ],
      moreInfo: {
        name: "Explore Singing Careers",
        url: "https://www.bls.gov/ooh/entertainment-and-sports/musicians-and-singers.htm",
      },
    },
    dance: {
      title: "Dancer",
      keywords: [
        "dance",
        "choreography",
        "ballet",
        "hip-hop",
        "contemporary dance",
      ],
      resources: [
        { name: "Dance Magazine", url: "https://www.dancemagazine.com/" },
        { name: "Dance Studio Life", url: "https://www.dancestudiolife.com/" },
      ],
      moreInfo: {
        name: "Explore Dance Careers",
        url: "https://www.bls.gov/ooh/entertainment-and-sports/dancers-and-choreographers.htm",
      },
    },
    culinary: {
      title: "Chef",
      keywords: ["culinary", "cooking", "chef", "cuisine", "restaurant"],
      resources: [
        {
          name: "Culinary Institute of America",
          url: "https://www.ciachef.edu/",
        },
        {
          name: "Coursera",
          url: "https://www.coursera.org/browse/food-and-cooking",
        },
      ],
      moreInfo: {
        name: "Explore Culinary Careers",
        url: "https://www.bls.gov/ooh/food-preparation-and-serving/chefs-and-head-cooks.htm",
      },
    },
    fashion: {
      title: "Fashion Designer",
      keywords: ["fashion", "design", "clothing", "apparel", "fashion design"],
      resources: [
        {
          name: "Fashion Institute of Technology",
          url: "https://www.fitnyc.edu/",
        },
        { name: "Vogue Business", url: "https://www.voguebusiness.com/" },
      ],
      moreInfo: {
        name: "Explore Fashion Careers",
        url: "https://www.bls.gov/ooh/arts-and-design/fashion-designers.htm",
      },
    },
    sports: {
      title: "Athlete",
      keywords: [
        "sports",
        "athlete",
        "professional sports",
        "fitness",
        "sports training",
      ],
      resources: [
        { name: "ESPN", url: "https://www.espn.com/" },
        {
          name: "National Collegiate Athletic Association",
          url: "https://www.ncaa.com/",
        },
      ],
      moreInfo: {
        name: "Explore Sports Careers",
        url: "https://www.bls.gov/ooh/entertainment-and-sports/athletes-and-sports-competitors.htm",
      },
    },
    journalism: {
      title: "Journalist",
      keywords: [
        "journalism",
        "reporter",
        "news",
        "media",
        "broadcast journalism",
      ],
      resources: [
        { name: "Poynter", url: "https://www.poynter.org/" },
        { name: "Journalism.org", url: "https://www.journalism.org/" },
      ],
      moreInfo: {
        name: "Explore Journalism Careers",
        url: "https://www.bls.gov/ooh/media-and-communication/reporters-correspondents-and-broadcast-news-analysts.htm",
      },
    },
    filmmaking: {
      title: "Filmmaker",
      keywords: [
        "filmmaking",
        "film production",
        "director",
        "cinematography",
        "screenwriting",
        "filmmaker",
        "director"
      ],
      resources: [
        { name: "Filmmaker Magazine", url: "https://filmmakermagazine.com/" },
        { name: "No Film School", url: "https://nofilmschool.com/" },
      ],
      moreInfo: {
        name: "Explore Filmmaking Careers",
        url: "https://www.bls.gov/ooh/entertainment-and-sports/producers-and-directors.htm",
      },
    },
  };

  const interestsList = interests.map((item) => item.trim().toLowerCase());
  const matchedCareers = [];

  interestsList.forEach((interest) => {
    Object.keys(careerOptions).forEach((key) => {
      if (careerOptions[key].keywords.includes(interest)) {
        matchedCareers.push(careerOptions[key]);
      }
    });
  });

  if (matchedCareers.length > 0) {
    let adviceHtml =
      "Based on your interests, you might consider these careers:<ul>";
    matchedCareers.forEach((career) => {
      adviceHtml += `<li>${career.title}<ul>`;
      career.resources.forEach((resource) => {
        adviceHtml += `<li><a href="${resource.url}" target="_blank">${resource.name}</a></li>`;
      });
      adviceHtml += `<li><a href="${career.moreInfo.url}" target="_blank">Learn more about ${career.title}</a></li>`;
      adviceHtml += `</ul></li>`;
    });
    adviceHtml += "</ul>";
    return adviceHtml;
  } else {
    return "No direct matches found. Please provide more specific interests.";
  }
}
