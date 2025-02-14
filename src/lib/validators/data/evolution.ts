export type RoadmapYear = {
  structure: string;
  valuation: string;
  funding: string;
  status: string;
  team: {
    total: number;
    breakdown: {
        divisions?: {
            members: {
                name: string;
                role: string;
            }[];
        };
        leadership?: {
            members: {
                name: string;
                role: string;
                image?: string;
            }[];
        };
        investors?: {
          members: {
            name: string;
            role: string;
          }[];
        };
        tech?: {
          engineering?: {
            members: {
              name: string;
              role: string;
              image?: string;
            }[];
          };
          members?: {
            name: string;
            role: string;
          }[];
        };
        finance?: {
          members: {
            name: string;
            role: string;
            image?: string;
          }[];
        };
        creative?: {
          design?: {
            members: {
              name: string;
              role: string;
              image?: string;    
            }[];
          };
          animation?: {
            members: {
              name: string;
              role: string; 
              image?: string;
            }[];
          };
        };
        engineering?: {
          members: {
            name: string;
            role: string;
            image?: string;
          }[];
        };
        business?: {
          members: {
            name: string;
            role: string;
            image?: string;
          }[];
        };
        product?: {
          members: {
            name: string;
            role: string;
            image?: string;
          }[];
        };
        marketing?: {   
          members: {
            name: string;
            role: string;
            image?: string;
          }[];
        };  
      coFounders?: {
        tech: {
          members: {
            name: string;
            role: string;
            image?: string;
          }[];
        };
        creative: {
          members: {
            name: string;
            role: string;
            image?: string;
          }[];
        };
        business: {
          members: {
            name: string;
            role: string;
            image?: string;
          }[];
        };
        marketing: {
          members: {
            name: string;
            role: string;
            image?: string;
          }[];
        };
      };
      advisors?: {
        business: {
          members: {
            name: string;
            role: string;
          }[];
        };
        tech: {
          members: {
            name: string;
            role: string;
          }[];
        };
      };
      interns?: {
        tech: {
          members: {
            name: string;
            role: string;
          }[];
        };
        creative: {
          members: {
            name: string;
            role: string;
          }[];
        };
      };
      freelancers?: {
        creative: {
          members: {
            name: string;
            role: string;
          }[];
        };
      };
    };
    keyHires?: string[];
  };
  financials: {
    revenue: {
      target: string;
      breakdown: {
        product: string;
        consulting: string;
        animation: string;
      };
    };
    burnRate: string;
    runway: string;
    status?: string;
    valuation?: string;
    funding?: string;
  };
  ventures: {
    [key: string]: {
      logo?: string;
      status: string;
      focus?: string;
      users?: string;
      revenue?: string;
      stage?: string;
    };
  };
  equity?: {
    founders: string;
    investors: string;
    esop: string;
    details: string;
  };
  milestones: string[];
  subsidiaries: {
    name: string;
    revenue: string;
    stage: string;
    focus?: string;
    units?: {
      name: string;
      revenue: string;
    }[];
    ventures?: {
      name: string;
      revenue: string;
      valuation?: string;
      focus?: string;
      users?: string;
      stage?: string;
    }[];
    divisions?: {
      name: string;
      revenue: string;
      focus?: string;
      units?: {
        name: string;
        revenue: string;
        services?: string[];
      }[];
    }[];
  }[];
  risks?: string[];
  divisions?: {
    name: string;
    revenue: string;
    units?: {
      name: string;
      revenue: string;
    }[];
    team: string;
    projects: string;
  }[];
};

const roadmapData: { [key: string]: RoadmapYear } = {
    '2024': {
    structure: "NexzGen Studio (Sole Proprietorship) - 2 Divisions",
    valuation: "RM 100K",
    funding: "Bootstrapped",
    status: "Bootstrapped",


    team: {
      total: 11,
      breakdown: {
        coFounders: {
          tech: {
            members: [
              {
                name: "Hafiz Kadir",
                role: "Founder, CEO & CTO (Chief Everything Officer)",
                image: "/images/cofounders/ceo.png"
              },
              {
                name: "Tengku Amirul Haiqal",
                role: "CIO - Chief Innovation(Insomnia) Officer",
                image: "/images/cofounders/cio.png"

              }
            ]
          },


          creative: {
            members: [
              {
                name: "Andi A Ghani",
                role: "CCO - Chief Creative(Cartoon) Officer",
                image: "/images/cofounders/cco.png"
              }
            ]


          },

          business: {
            members: [
              {
                name: "Putera Shazmin",
                role: "COO - Chief Operation(Overtime) Officer",
                image: "/images/cofounders/coo.png"
              }
            ]
          },
          marketing: {
            members: [
              {
                name: "Aliff Farhat",
                role: "CMO - Chief Marketing(Meme) Officer",
                image: "/images/cofounders/cmo.png"
              }

            ]
          }
        },
        advisors: {
            business: {
                members: [
                    {
                        name: "Andi Aksan",
                        role: "Head Aftersales - EON",
                      },
                ]
              },
          tech: {
            members: [
             
              {
                name: "Hisham Mohamad",
                role: "Product Manager - Xsolla",
              },
              {
                name: "Haziq Roslan",
                role: "Product Manager - Digitas Malaysia",

              },
              {
                name: "Fatin Syahiera",
                role: "Product Manager - Mercedes Benz",

              },
            ]
          }


         
        },
        interns: {
            tech: {
                members: [
                        {
                            name: "Haziq Hakimi",
                            role: "Fullstack Developer (Next.js)",
                        },
                        {
                            name: "Haris Azhari",
                            role: "Fullstack Developer (Next.js)",
                        },
                        {
                            name: "Muhammad Hakim",
                            role: "Fullstack Developer (Next.js)",
                        }
                        ]
              },

          creative: {
            members: [
             
              {
                name: "Nur Afira",
                role: "Ui/Ux Designer",
              },

              {
                name: "Nur Farrah",
                role: "Ui/Ux Designer",


              },
              {
                name: "Adam Idris",
                role: "Ui/Ux Designer",


              },
            ]
          }
        },
        freelancers: {
            creative: {
            members: [
                {
                  name: "Muhammad Daniel",
                  role: "Ui/Ux Designer",
                },
                {
                    name: "Faris Akmal",
                    role: "Brand Designer",
                  }
              ]
            }
        }
      },
      keyHires: ["CTO", "Lead Developer", "Marketing Manager"] 


    },
    financials: {
      revenue: {
        target: "RM 20K",
        breakdown: {
          consulting: "RM 15K",
          product: "RM 5K",
          animation: "RM 0"
        }
      },
      burnRate: "RM 5K/month",
      runway: "12 months",
      status: "Bootstrapped"
    },
    ventures: {
      Nexus: { logo: "/images/nexzgen.png", status: "Live", focus: "Core Features" },
      ARespiratory: { logo: "/images/arespiratory.png", status: "Beta", focus: "Content Creation" },
      ServisLah: { logo: "/images/servislah.png", status: "Development", focus: "Core Features" },
      NexzGenAcademy: { logo: "/images/nexzgenacademy.png", status: "Not started", focus: "Market Research" },
      CareerRPG: { status: "Ideation", focus: "MVP" },
      Blanjer: {  status: "Development", focus: "Market Research" },





    },
    equity: {
      founders: "100%",
      investors: "0%",
      esop: "0%",
      details: "Bootstrapped"
    },
    milestones: [
      "R&D Kickoff",
      "Initial Traction",
      "Core Team Formation",
      "Market Validation"
    ],
    subsidiaries: [
        {
          name: "Digital Transformation Division",
          revenue: "RM 5K",
          stage: "Growth",

          units: [
            {
              name: "Web Development",
              revenue: "RM 4K",
            },


            {
              name: "Mobile App Development (AR)",
              revenue: "RM 1K",
            }



          ]
        },
        {
          name: "Digital Marketing Division",
          revenue: "RM 1.5K",
          stage: "Growth",
          units: [


            {
              name: "Social Media Ads/Marketing",
              revenue: "RM 1K"
            },

            {
              name: "Content Creation",
              revenue: "RM 0.5K"
            }

          ]
        }
      ],
    risks: [
      "Product-Market Fit",
      "Cash Flow",
      "Team Building"
    ],
    divisions: [
      {
        name: "Web Development",
        revenue: "RM 10K",
        team: "3 members",
        projects: "4 active"
      },
      {
        name: "Digital Marketing",
        revenue: "RM 2K",
        team: "2 members",
        projects: "3 active"
      }
    ]
  },
  '2025': {
    structure: "NexzGen Studio (Sole Proprietorship) - 4 Divisions",
    valuation: "RM 2M",
    funding: "Pre seed RM 200K",
    status: "Pre seed",


    team: {
      total: 11,
      breakdown: {
        coFounders: {
          tech: {
            members: [
              {
                name: "Hafiz Kadir",
                role: "Founder, CEO & CTO (Chief Everything Officer)",
                image: "/images/cofounders/ceo.png"
              },
              {
                name: "Tengku Amirul Haiqal",
                role: "CIO - Chief Innovation(Insomnia) Officer",
                image: "/images/cofounders/cio.png"

              }
            ]
          },


          creative: {
            members: [
              {
                name: "Andi A Ghani",
                role: "CCO - Chief Creative(Cartoon) Officer",
                image: "/images/cofounders/cco.png"
              }
            ]


          },

          business: {
            members: [
              {
                name: "Putera Shazmin",
                role: "COO - Chief Operation(Overtime) Officer",
                image: "/images/cofounders/coo.png"
              }
            ]
          },
          marketing: {
            members: [
              {
                name: "Aliff Farhat",
                role: "CMO - Chief Marketing(Meme) Officer",
                image: "/images/cofounders/cmo.png"
              }

            ]
          }
        },
        advisors: {
            business: {
                members: [
                    {
                        name: "Andi Aksan",
                        role: "Head Aftersales - EON",
                      },
                ]
              },
          tech: {
            members: [
             
              {
                name: "Hisham Mohamad",
                role: "Product Manager - Xsolla",
              },
              {
                name: "Haziq Roslan",
                role: "Product Manager - Digitas Malaysia",

              },
              {
                name: "Fatin Syahiera",
                role: "Product Manager - Mercedes Benz",

              },
            ]
          }


         
        },
        interns: {
            tech: {
                members: [
                        {
                            name: "Vacant",
                            role: "Software Engineer",
                        },
                        {
                            name: "Vacant",
                            role: "Software Engineer",
                        }
                        ]
              },

          creative: {
            members: [
             
              {
                name: "Vacant",
                role: "Ui/Ux Designer",
              },

              
                
              {
                name: "Vacant",
                role: "Animator",

              },
              {
                name: "Vacant",
                role: "Animator",

              },
                
              {
                name: "Vacant",
                role: "Concept Artist",

              },
            ]
          }
        },
        freelancers: {
            creative: {
            members: [
                {
                  name: "Muhammad Daniel",
                  role: "Ui/Ux Designer",
                },
                {
                    name: "Faris Akmal",
                    role: "Brand Designer",
                }
              ]
            }
        }
      },
      keyHires: ["Product Manager", "Junior Animator"] 


    
      

    },
    financials: {
      revenue: {
        target: "RM 100K",
        breakdown: {
          product: "RM 10K",
          consulting: "RM 85K",
          animation: "RM 5K"
        }
      },
      burnRate: "RM 15K/month",
      runway: "18 months",
      status: "Pre seed"
    },
    ventures: {
      CareerRPG: { 
        status: "MVP", 
        users: "1K waitlist",
        revenue: "RM 1K"
      },
      ServisLah: { 
        status: "Beta",
        users: "20 service centre",
        revenue: "RM 5K"
      },
      ARespiratory: {
        status: "Launch",
        users: "200 medical students",
        revenue: "RM 10K"
      } ,
      Blanjer: {
        status: "Launch",
        users: "500 households",
        revenue: "RM 10K"
      }
    },
    subsidiaries: [
      {
        name: "Product R&D Division",
        revenue: "RM 10K",
        stage: "Growth",
        units: [
          {
            name: "CareerRPG",
            revenue: "RM 0",
          },
          {
            name: "ServisLah",
            revenue: "RM 5K",
          },
          {
            name: "ARespiratory",
            revenue: "RM 3K",
          },
        {
          name: "Blanjer",
          revenue: "RM 2K",
        }
        ]
      },
      {
        name: "Animation Studio Division",
        revenue: "RM 5K",
        stage: "Growth",
        units: [
          
          {
            name: "3D Animation Production",
            revenue: "RM 4K"
          },
          {
            name: "Commercial Content Partnership",
            revenue: "RM 1K"
          }
        ]
      },
      {
        name: "Digital Transformation Services Division",
        revenue: "RM 85K",
        stage: "Growth",
        units: [
          {
            name: "Website Development & Maintenance - Landing Page (Framer)",
            revenue: "RM 2K"
          },
          {
            name: "Website Development & Maintenance - E-Commerce (Shopify)",
            revenue: "RM 2K"
          },
          {
            name: "Mobile App Development & Maintenance - React Native/Expo",
            revenue: "RM 2K"
          },    
          {
            name: "AR Mobile App Development - Unity/Blender",
            revenue: "RM 2K"
          },
          
          {
            name: "Brozkey - Customized Solution (Next.js)",
            revenue: "RM 75K"
          },
          {
            name: "Training & Courses",
            revenue: "RM 2K"
          }
        ]

      },
        {
        name: "Digital Marketing Division",
        revenue: "RM 5K",
        stage: "Growth",
        units: [
          {
            name: "Social Media Management",
            revenue: "RM 2K"
          },
          {
            name: "Content Creation",
            revenue: "RM 3K"
          }
        ]
      }
    ],
    equity: {
      founders: "90%",
      investors: "10%",
      esop: "0%",
      details: "Post Pre seed"
    },
    milestones: [
      "Pre seed Round completion",
      "Regional Expansion Initiation",
      "First Animation IP production"
    ],
    risks: [
      "Scaling Operations",
      "Talent Retention",
      "Cash Flow Management",
      "Product Development Timeline"
    ]
  },
  '2026': {
    structure: "NexzGen Sdn Bhd",
    valuation: "RM 10M",
    funding: "YC/Iterative/Hustlefund Seed Round RM 2M",
    status: "Regional Growth",
    team: {
      total: 25,
      breakdown: {
        leadership: {
              members: [
                {
                  name: "Hafiz Kadir",
                  role: "CEO, Tech Lead",
                  image: "/images/cofounders/ceo.png"
                },
                {
                    name: "Andi A Ghani",
                    role: "CCO, Animation Lead",
                    image: "/images/cofounders/cco.png"
                  },
                {
                  name: "Tengku Amirul Haiqal",
                  role: "CIO, R&D Lead",
                  image: "/images/cofounders/cio.png"
                },  
                
                {
                    name: "Aliff Farhat",
                    role: "CMO, Social Media Lead",
                    image: "/images/cofounders/cmo.png"
                },
                {
                  name: "Putera Shazmin",
                  role: "COO, Business Lead",
                  image: "/images/cofounders/coo.png"
                }
              ]
          },
          investors: {
           
            members: [
                {
                    name: "Andi Aksan",
                    role: "Head Aftersales - EON",
                  },
              {
                name: "Hisham Mohamad",
                role: "Product Manager - Xsolla",
              },
              {
                name: "Haziq Roslan",
                role: "Product Manager - Digitas Malaysia",

              },
              {
                name: "Fatin Syahiera",
                role: "Product Manager - Mercedes Benz",

              },
              {
                name: "Vacant",
                role: "",

              },
              {
                name: "Vacant",
                role: "",

              }
            ]
          


         
        },
        tech: {
            members: [
              { name: "Vacant", role: "Software Engineer - Protege" },
              { name: "Vacant", role: "Software Engineer - Protege" },
              { name: "Vacant", role: "QA Engineer - Protege" },

            ]
        },
        creative: {
          design: {
            members: [
              { name: "Vacant", role: "Ui/Ux Designer - Protege" },
              { name: "Vacant", role: "Brand Designer - Protege" },
            ]
          },
          animation: {
            members: [
            {name: "Vacant", role: "Concept Artist - Protege"},
            { name: "Vacant", role: "Animator - Protege" },
            { name: "Vacant", role: "Animator - Protege" }
            ]
          }
        },
        
          
        //   humanResource: {
        //     members: [
        //       { name: "Vacant", role: "HR Analyst - Payroll & Recruitment" }
        //     ]
        //   },
          
        //   operations: {
        //     members: [
        //       { name: "Vacant", role: "Business Development Executive" }
        //     ]
        //   },
        
        marketing: {
          members: [
            { name: "Vacant", role: "Social Media Manager" },
            { name: "Vacant", role: "Content Editor" }
          ]
        },
        finance: {
          members: [
            { name: "Vacant", role: "Finance Analyst - Accounting & Bookkeeping" },
          ]
        },
        interns: {
            tech: {
                members: [
                        {
                            name: "Vacant",
                            role: "Software Engineer",
                        },
                        {
                            name: "Vacant",
                            role: "Software Engineer",
                        }
                        ]
              },

          creative: {
            members: [
             
              {
                name: "Vacant",
                role: "Ui/Ux Designer",
              },

              
                
              {
                name: "Vacant",
                role: "Animator",

              },
              {
                name: "Vacant",
                role: "Animator",

              },
                
              {
                name: "Vacant",
                role: "Concept Artist",

              },
            ]
          }
        },
        freelancers: {
            creative: {
            members: [
                {
                  name: "Muhammad Daniel",
                  role: "Ui/Ux Designer",
                },
                {
                    name: "Faris Akmal",
                    role: "Brand Designer",
                }
              ]
            }
        }
       
      },
      keyHires: ["Software Engineer", "Brand Designer", "Animator", "QA Engineer", "Finance Analyst"]
    },
    financials: {
      revenue: {
        target: "RM 500K",
        breakdown: {
          product: "RM 200K",
          consulting: "RM 250K",
          animation: "RM 50K"
        }
      },
      burnRate: "RM 35K/month",
      runway: "12 months",
      status: "Regional Growth"
    },
    ventures: {
      CareerRPG: { 
        status: "Product-Market Fit", 
        users: "10K",
        revenue: "RM 10K ARR",
        stage: "Seed"
      },
      ServisLah: { 
        status: "Early Traction",
        users: "1K businesses",
        revenue: "RM 10K ARR",
        stage: "Beta"
      },
      ARespiratory: {
        status: "Market Validation",
        users: "500 medical professionals",
        revenue: "RM 10K ARR"
      }
    },
    subsidiaries: [
        {
          name: "Product R&D Division",
          revenue: "RM 10K",
          stage: "Growth",
          units: [
            {
              name: "CareerRPG",
              revenue: "RM 0",
            },
            {
              name: "ServisLah",
              revenue: "RM 5K",
            },
            {
              name: "ARespiratory",
              revenue: "RM 3K",
            },
          {
            name: "Blanjer",
            revenue: "RM 2K",
          }
          ]
        },
        {
          name: "Animation Studio Division",
          revenue: "RM 5K",
          stage: "Growth",
          units: [
            
            {
              name: "3D Animation Production",
              revenue: "RM 4K"
            },
            {
              name: "Commercial Content Partnership",
              revenue: "RM 1K"
            }
          ]
        },
        {
          name: "Digital Transformation Services Division",
          revenue: "RM 85K",
          stage: "Growth",
          units: [
            {
              name: "Website Development & Maintenance - Landing Page (Framer)",
              revenue: "RM 2K"
            },
            {
              name: "Website Development & Maintenance - E-Commerce (Shopify)",
              revenue: "RM 2K"
            },
            {
              name: "Mobile App Development & Maintenance - React Native/Expo",
              revenue: "RM 2K"
            },    
            {
              name: "AR Mobile App Development - Unity/Blender",
              revenue: "RM 2K"
            },
            
            {
              name: "Brozkey - Customized Solution (Next.js)",
              revenue: "RM 75K"
            },
            {
              name: "Training & Courses",
              revenue: "RM 2K"
            }
          ]
  
        },
          {
          name: "Digital Marketing Division",
          revenue: "RM 5K",
          stage: "Growth",
          units: [
            {
              name: "Social Media Management",
              revenue: "RM 2K"
            },
            {
              name: "Content Creation",
              revenue: "RM 3K"
            }
          ]
        }
    ],
    equity: {
      founders: "80%",
      investors: "15%",
      esop: "5%",
      details: "Post-Seed"
    },
    milestones: [
      "YC Batch Acceptance",
      "Regional Market Entry",
      "Product-Market Fit Achievement",
      "Core Team Formation"
    ],
    risks: [
      "Scaling Operations",
      "Market Competition",
      "Tech Development Timeline",
      "Cash Flow Management"
    ]
  },
  '2027': {
    structure: "NexzGen Sdn Bhd",
    valuation: "RM 20M",
    funding: "Pre-Series A Bridge RM 3M",
    status: "Regional Growth",
    team: {
      total: 35,
      breakdown: {
        leadership: {
            members: [
              {
                name: "Hafiz Kadir",
                role: "CEO, Tech Lead",
                image: "/images/cofounders/ceo.png"
              },
              {
                  name: "Andi A Ghani",
                  role: "CCO, Animation Lead",
                  image: "/images/cofounders/cco.png"
                },
              {
                name: "Tengku Amirul Haiqal",
                role: "CIO, R&D Lead",
                image: "/images/cofounders/cio.png"
              },  
              
              {
                  name: "Aliff Farhat",
                  role: "CMO, Social Media Lead",
                  image: "/images/cofounders/cmo.png"
              },
              {
                name: "Putera Shazmin",
                role: "COO, Business Lead",
                image: "/images/cofounders/coo.png"
              }
            ]
        },
        investors: {
         
          members: [
              {
                  name: "Andi Aksan",
                  role: "Head Aftersales - EON",
                },
            {
              name: "Hisham Mohamad",
              role: "Product Manager - Xsolla",
            },
            {
              name: "Haziq Roslan",
              role: "Product Manager - Digitas Malaysia",

            },
            {
              name: "Fatin Syahiera",
              role: "Product Manager - Mercedes Benz",

            },
            {
              name: "Vacant",
              role: "",

            },
            {
              name: "Vacant",
              role: "",

            }
          ]
        


       
      },
        tech: {
            members: [
              { name: "Vacant", role: "Software Engineer" },
              { name: "Vacant", role: "Software Engineer" },
              { name: "Vacant", role: "Software Engineer - Protege" },
              { name: "Vacant", role: "Software Engineer - Protege" },
            ]
        },
        creative: {
          design: {
            members: [
              { name: "Vacant", role: "UI/UX Designer" },
              { name: "Vacant", role: "UI/UX Designer - Protege" }
            ]
          },
          animation: {
            members: [
              { name: "Vacant", role: "Animator" },
              { name: "Vacant", role: "Animator" },
              { name: "Vacant", role: "Animator - Protege" },
              { name: "Vacant", role: "Animator - Protege" },
              { name: "Vacant", role: "3D Artist" },
              { name: "Vacant", role: "Concept Artist" },
              { name: "Vacant", role: "Storyboard Artist" },
            ]
          }
        },
        business: {
            members: [
              { name: "Vacant", role: "Business Development Executive" },
              { name: "Vacant", role: "Business Analyst" },
            ]
        },
        interns: {
            tech: {
                members: [
                        {
                            name: "Vacant",
                            role: "Software Engineer",
                        },
                        {
                            name: "Vacant",
                            role: "Software Engineer",
                        }
                        ]
              },

          creative: {
            members: [
             
              {
                name: "Vacant",
                role: "Ui/Ux Designer",
              },

              
                
              {
                name: "Vacant",
                role: "Animator",

              },
              {
                name: "Vacant",
                role: "Animator",

              },
                
              {
                name: "Vacant",
                role: "Concept Artist",

              },
            ]
          }
        },
        freelancers: {
            creative: {
            members: [
                {
                  name: "Muhammad Daniel",
                  role: "Ui/Ux Designer",
                },
                {
                    name: "Faris Akmal",
                    role: "Brand Designer",
                }
              ]
            }
        }
      },
      keyHires: [
        "Software Engineer",
        "Brand Designer",
        "Business Development Executive",
        "Social Media Manager"
      ]
    },
    financials: {
      revenue: {
        target: "RM 2M",
        breakdown: {
          product: "RM 1M",
          consulting: "RM 750K",
          animation: "RM 250K"
        }
      },
      burnRate: "RM 80K/month",
      runway: "24 months",
      status: "Regional Expansion"
    },
    ventures: {
        CareerRPG: { 
          status: "Product-Market Fit", 
          users: "10K",
          revenue: "RM 10K ARR",
          stage: "Seed"
        },
        ServisLah: { 
          status: "Early Traction",
          users: "1K businesses",
          revenue: "RM 10K ARR",
          stage: "Beta"
        },
        ARespiratory: {
          status: "Market Validation",
          users: "500 medical professionals",
          revenue: "RM 10K ARR"
        },
        Blanjer: {
          status: "Market Validation",
          users: "500 medical professionals",
          revenue: "RM 10K ARR"
        },
        NexzGenAcademy: {
          status: "Market Validation",
          users: "500 medical professionals",
          revenue: "RM 10K ARR"
        }
      },
      subsidiaries: [
          {
            name: "Product R&D Division",
            revenue: "RM 10K",
            stage: "Growth",
            units: [
              {
                name: "CareerRPG",
                revenue: "RM 10K",
              },
              {
                name: "ServisLah",
                revenue: "RM 15K",
              },
              {
                name: "ARespiratory",
                revenue: "RM 5K",
              },
            {
              name: "Blanjer",
              revenue: "RM 5K",
            },
            {
              name: "NexzGen Academy",
              revenue: "RM 5K",
            }
            ]
          },
          {
            name: "Animation Studio Division",
            revenue: "RM 5K",
            stage: "Growth",
            units: [
              
              {
                name: "3D Animation Production",
                revenue: "RM 4K"
              },
              {
                name: "Commercial Content Partnership",
                revenue: "RM 1K"
              },
              {
                name:"Merchandise Production",
                revenue: "RM 10K"
              }
            ]
          },
          {
            name: "Digital Transformation Services Division",
            revenue: "RM 85K",
            stage: "Growth",
            units: [
              {
                name: "Website Development & Maintenance - Landing Page (Framer)",
                revenue: "RM 2K"
              },
              {
                name: "Website Development & Maintenance - E-Commerce (Shopify)",
                revenue: "RM 2K"
              },
              {
                name: "Mobile App Development & Maintenance - React Native/Expo",
                revenue: "RM 2K"
              },    
              {
                name: "AR Mobile App Development - Unity/Blender",
                revenue: "RM 2K"
              },
              
              {
                name: "Brozkey - Customized Solution (Next.js)",
                revenue: "RM 75K"
              },
              {
                name: "Training & Courses",
                revenue: "RM 2K"
              }
            ]
    
          },
            {
            name: "Digital Marketing Division",
            revenue: "RM 5K",
            stage: "Growth",
            units: [
              {
                name: "Social Media Management",
                revenue: "RM 2K"
              },
              {
                name: "Content Creation",
                revenue: "RM 3K"
              },
              {
                name: "Podcast Production",
                revenue: "RM 5K"
              }
            ]
          }
      ],
    equity: {
      founders: "75%",
      investors: "20%",
      esop: "5%",
      details: "Pre-Series A"
    },
    milestones: [
      "Bridge Round Completion",
      "25K Active Users",
      "Regional Market Entry",
      "Core Product Validation"
    ],
    risks: [
      "Market Expansion",
      "Team Growth",
      "Product Development",
      "Cash Flow Management"
    ]
  },
  '2028': {
    structure: "NexzGen Sdn Bhd",
    valuation: "RM 50M",
    funding: "Series A RM 10M",
    status: "ASEAN Expansion",
    team: {
      total: 50,
      breakdown: {
        leadership: {
            members: [
              {
                name: "Hafiz Kadir",
                role: "CEO, Tech Lead",
                image: "/images/cofounders/ceo.png"
              },
              {
                  name: "Andi A Ghani",
                  role: "CCO, Animation Lead",
                  image: "/images/cofounders/cco.png"
                },
              {
                name: "Tengku Amirul Haiqal",
                role: "CIO, R&D Lead",
                image: "/images/cofounders/cio.png"
              },  
              
              {
                  name: "Aliff Farhat",
                  role: "CMO, Social Media Lead",
                  image: "/images/cofounders/cmo.png"
              },
              {
                name: "Putera Shazmin",
                role: "COO, Business Lead",
                image: "/images/cofounders/coo.png"
              }
            ]
        },
        investors: {
         
          members: [
              {
                  name: "Andi Aksan",
                  role: "Head Aftersales - EON",
                },
            {
              name: "Hisham Mohamad",
              role: "Product Manager - Xsolla",
            },
            {
              name: "Haziq Roslan",
              role: "Product Manager - Digitas Malaysia",

            },
            {
              name: "Fatin Syahiera",
              role: "Product Manager - Mercedes Benz",

            },
            {
              name: "Vacant",
              role: "",

            },
            {
              name: "Vacant",
              role: "",

            }
          ]
        


       
      },
        tech: {
            members: [
              { name: "Vacant", role: "Senior Software Engineer" },
              { name: "Vacant", role: "Software Engineer" },
              { name: "Vacant", role: "Software Engineer" },
              { name: "Vacant", role: "Software Engineer" },
              { name: "Vacant", role: "QA Engineer" },
              { name: "Vacant", role: "Software Engineer - Protege" },
              { name: "Vacant", role: "Software Engineer - Protege" },
            ]
        },
        creative: {
          design: {
            members: [
              { name: "Vacant", role: "Senior Product Designer" },
              { name: "Vacant", role: "Ui/Ux Designer" },
              { name: "Vacant", role: "Ui/Ux Designer" },
              { name: "Vacant", role: "Ui/Ux Designer - Protege" },
              
            ]
          },
          animation: {
            members: [
              { name: "Vacant", role: "Senior Animator" },
              { name: "Vacant", role: "Animator" },
              { name: "Vacant", role: "Animator" },
              { name: "Vacant", role: "Animator" },
              { name: "Vacant", role: "Animator - Protege" },
              { name: "Vacant", role: "Animator - Protege" },
              { name: "Vacant", role: "3D Artist" },
              { name: "Vacant", role: "Concept Artist" },
              { name: "Vacant", role: "Storyboard Artist" },
              { name: "Vacant", role: "Lighting Artist" },
              { name: "Vacant", role: "Environment Artist" },
              
            ]
          },
        },
          product: {
            members: [
              { name: "Vacant", role: "Product Manager" },
            ]
          },
          business: {
            members: [
              { name: "Vacant", role: "Business Development Executive" },
              { name: "Vacant", role: "Business Analyst" },
            ]
          },
        
      },
      keyHires: [
        "Head of ASEAN",
        "VP Engineering",
        "Head of Growth",
        "Head of People"
      ]
    },
    financials: {
      revenue: {
        target: "RM 5M",
        breakdown: {
          product: "RM 3M",
          consulting: "RM 1.5M",
          animation: "RM 500K"
        }
      },
      burnRate: "RM 300K/month",
      runway: "24 months",
      status: "ASEAN Expansion"
    },
    ventures: {
      CareerRPG: { 
        status: "Regional Growth", 
        users: "50K",
        revenue: "RM 4M ARR",
        stage: "Series A"
      },
      ServisLah: { 
        status: "Market Expansion",
        users: "5K businesses",
        revenue: "RM 2M ARR",
        stage: "Growth"
      },
      ARespiratory: {
        status: "Regional Leader",
        users: "2K medical professionals",
        revenue: "RM 1.5M ARR"
      }
    },
    subsidiaries: [
        {
          name: "Product R&D Division",
          revenue: "RM 10K",
          stage: "Growth",
          units: [
            {
              name: "CareerRPG",
              revenue: "RM 10K",
            },
            {
              name: "ServisLah",
              revenue: "RM 15K",
            },
            {
              name: "ARespiratory",
              revenue: "RM 5K",
            },
          {
            name: "Blanjer",
            revenue: "RM 5K",
          },
          {
            name: "NexzGen Academy",
            revenue: "RM 5K",
          }
          ]
        },
        {
          name: "Animation Studio Division",
          revenue: "RM 5K",
          stage: "Growth",
          units: [
            
            {
              name: "Animation Production",
              revenue: "RM 35K"
            },
            {
              name: "Commercial Content Partnership",
              revenue: "RM 5K"
            },
            {
              name:"Merchandise Production",
              revenue: "RM 10K"
            }
          ]
        },
        {
          name: "Digital Transformation Services Division",
          revenue: "RM 85K",
          stage: "Growth",
          units: [
            {
              name: "Website Development & Maintenance - Landing Page (Framer)",
              revenue: "RM 2K"
            },
            {
              name: "Website Development & Maintenance - E-Commerce (Shopify)",
              revenue: "RM 2K"
            },
            {
              name: "Mobile App Development & Maintenance - React Native/Expo",
              revenue: "RM 2K"
            },    
            {
              name: "AR Mobile App Development - Unity/Blender",
              revenue: "RM 2K"
            },
            
            {
              name: "Brozkey - Customized Solution (Next.js)",
              revenue: "RM 75K"
            },
            {
              name: "Training & Courses",
              revenue: "RM 2K"
            }
          ]
  
        },
          {
          name: "Digital Marketing Division",
          revenue: "RM 5K",
          stage: "Growth",
          units: [
            {
              name: "Social Media Management",
              revenue: "RM 2K"
            },
            {
              name: "Content Creation",
              revenue: "RM 3K"
            },
            {
              name: "Podcast Production",
              revenue: "RM 5K"
            }
          ]
        }
    ],
    equity: {
      founders: "65%",
      investors: "25%",
      esop: "10%",
      details: "Post-Series A"
    },
    milestones: [
      "Series A Completion",
      "ASEAN Market Entry",
      "50K Active Users",
      "Enterprise Client Acquisition"
    ],
    risks: [
      "Regional Expansion",
      "Team Scaling",
      "Product Development",
      "Market Competition"
    ]
  },
  '2029': {
    structure: "NexzGen Group Sdn Bhd",
    valuation: "RM 100M",
    funding: "Series B RM 20M",
    status: "APAC Expansion",
    team: {
      total: 80,
      breakdown: {leadership: {
        members: [
          {
            name: "Hafiz Kadir",
            role: "CEO, Tech Lead",
            image: "/images/cofounders/ceo.png"
          },
          {
              name: "Andi A Ghani",
              role: "CCO, Animation Lead",
              image: "/images/cofounders/cco.png"
            },
          {
            name: "Tengku Amirul Haiqal",
            role: "CIO, R&D Lead",
            image: "/images/cofounders/cio.png"
          },  
          
          {
              name: "Aliff Farhat",
              role: "CMO, Social Media Lead",
              image: "/images/cofounders/cmo.png"
          },
          {
            name: "Putera Shazmin",
            role: "COO, Business Lead",
            image: "/images/cofounders/coo.png"
          }
        ]
    },
    investors: {
     
      members: [
          {
              name: "Andi Aksan",
              role: "Head Aftersales - EON",
            },
        {
          name: "Hisham Mohamad",
          role: "Product Manager - Xsolla",
        },
        {
          name: "Haziq Roslan",
          role: "Product Manager - Digitas Malaysia",

        },
        {
          name: "Fatin Syahiera",
          role: "Product Manager - Mercedes Benz",

        },
        {
          name: "Vacant",
          role: "",

        },
        {
          name: "Vacant",
          role: "",

        }
      ]
    


   
  },
        tech: {
            members: [
              { name: "Vacant", role: "Tech Lead" },
              { name: "Vacant", role: "Tech Lead" },
              { name: "Vacant", role: "Senior Software Engineer" },
              { name: "Vacant", role: "Senior Software Engineer" },
              { name: "Vacant", role: "Software Engineer" },
              { name: "Vacant", role: "Software Engineer" },
              { name: "Vacant", role: "Software Engineer" },
              { name: "Vacant", role: "Software Engineer" },
              { name: "Vacant", role: "Software Engineer - Protege" },
              { name: "Vacant", role: "Software Engineer - Protege" },
              { name: "Vacant", role: "QA Engineer" },
              { name: "Vacant", role: "QA Engineer" },
              { name: "Vacant", role: "QA Engineer - Protege" },
              { name: "Vacant", role: "QA Engineer - Protege" },
            ]
        },
        creative: {
          design: {
            members: [
              { name: "Vacant", role: "Senior Product Designer" },
              { name: "Vacant", role: "Pitch Deck Designer" },
              { name: "Vacant", role: "Ui/Ux Designer" },
              { name: "Vacant", role: "Ui/Ux Designer" },
              { name: "Vacant", role: "Ui/Ux Designer - Protege" },
              { name: "Vacant", role: "Ui/Ux Designer - Protege" },
              { name: "Vacant", role: "Brand Designer - Protege" },
              { name: "Vacant", role: "Brand Designer - Protege" },
              
            ]
          },
          animation: {
            members: [
              { name: "Vacant", role: "Lead Animator" },
              { name: "Vacant", role: "Senior Animator" },
              { name: "Vacant", role: "Senior Animator" },
              { name: "Vacant", role: "Animator" },
              { name: "Vacant", role: "Animator" },
              { name: "Vacant", role: "Animator" },
              { name: "Vacant", role: "Animator" },
              { name: "Vacant", role: "Animator" },
              { name: "Vacant", role: "Animator - Protege" },
              { name: "Vacant", role: "Animator - Protege" },
              { name: "Vacant", role: "3D Artist" },
              { name: "Vacant", role: "3D Artist" },
              { name: "Vacant", role: "Concept Artist" },
              { name: "Vacant", role: "Storyboard Artist" },
              { name: "Vacant", role: "Storyboard Artist" },
              { name: "Vacant", role: "Lighting Artist" },
              { name: "Vacant", role: "Environment Artist" },
              
            ]
          },
        },
         
          product: {
            members: [
              { name: "Vacant", role: "Product Manager" },
              { name: "Vacant", role: "Product Manager" },
              
            ]
          },
          business: {
            members: [
              { name: "Vacant", role: "Business Development Executive" },
              { name: "Vacant", role: "Business Development Executive" },
              { name: "Vacant", role: "Business Analyst" },
              
            ]
          },
        
        
      },
      keyHires: [ ]
    },
    financials: {
      revenue: {
        target: "RM 10M",
        breakdown: {
          product: "RM 6M",
          consulting: "RM 3M",
          animation: "RM 1M"
        }
      },
      burnRate: "RM 500K/month",
      runway: "30 months",
      status: "APAC Expansion"
    },
    ventures: {
      CareerRPG: { 
        status: "ASEAN Growth", 
        users: "100K",
        revenue: "RM 10M ARR",
        stage: "Post Series A"
      },
      ServisLah: { 
        status: "Regional Growth",
        users: "15K businesses",
        revenue: "RM 6M ARR",
        stage: "Series A"
      },
      ARespiratory: {
        status: "ASEAN Expansion",
        users: "5K medical professionals",
        revenue: "RM 2.5M ARR"
      }
    },
    subsidiaries: [
        {
          name: "Product R&D Division",
          revenue: "RM 10K",
          stage: "Growth",
          units: [
            {
              name: "CareerRPG",
              revenue: "RM 10K",
            },
            {
              name: "ServisLah",
              revenue: "RM 15K",
            },
            {
              name: "ARespiratory",
              revenue: "RM 5K",
            },
          {
            name: "Blanjer",
            revenue: "RM 5K",
          },
          {
            name: "NexzGen Academy",
            revenue: "RM 5K",
          }
          ]
        },
        {
          name: "Animation Studio Division",
          revenue: "RM 5K",
          stage: "Growth",
          units: [
            
            {
              name: "Animation Production",
              revenue: "RM 35K"
            },
            {
              name: "Commercial Content Partnership",
              revenue: "RM 5K"
            },
            {
              name:"Merchandise Production",
              revenue: "RM 10K"
            }
          ]
        },
        {
          name: "Digital Transformation Services Division",
          revenue: "RM 85K",
          stage: "Growth",
          units: [
            {
              name: "Website Development & Maintenance - Landing Page (Framer)",
              revenue: "RM 2K"
            },
            {
              name: "Website Development & Maintenance - E-Commerce (Shopify)",
              revenue: "RM 2K"
            },
            {
              name: "Mobile App Development & Maintenance - React Native/Expo",
              revenue: "RM 2K"
            },    
            {
              name: "AR Mobile App Development - Unity/Blender",
              revenue: "RM 2K"
            },
            
            {
              name: "Brozkey - Customized Solution (Next.js)",
              revenue: "RM 75K"
            },
            {
              name: "Training & Courses",
              revenue: "RM 2K"
            }
          ]
  
        },
          {
          name: "Digital Marketing Division",
          revenue: "RM 5K",
          stage: "Growth",
          units: [
            {
              name: "Social Media Management",
              revenue: "RM 2K"
            },
            {
              name: "Content Creation",
              revenue: "RM 3K"
            },
            {
              name: "Podcast Production",
              revenue: "RM 5K"
            }
          ]
        }
    ],
    equity: {
      founders: "60%",
      investors: "30%",
      esop: "10%",
      details: "Post Series A Growth"
    },
    milestones: [
      "ASEAN Expansion",
      "100K Active Users",
      "Enterprise Platform Launch",
      "Regional Team Formation"
    ],
    risks: [
      "Regional Competition",
      "Operational Scale",
      "Market Penetration",
      "Talent Acquisition"
    ]
  },
  '2030': {
    structure: "NexzGen Sdn Bhd",
    valuation: "RM 150M",
    funding: "Series B RM 30M",
    status: "Regional Tech Leader",
    team: {
      total: 200,
      breakdown: {
        leadership: {
          members: [
            { name: "Hafiz Kadir", role: "CEO", image: "/images/cofounders/ceo.png" },
            { name: "Andi A Ghani", role: "CCO", image: "/images/cofounders/cco.png" },
            { name: "Tengku Amirul Haiqal", role: "CTO", image: "/images/cofounders/cio.png" },
            { name: "Aliff Farhat", role: "CMO", image: "/images/cofounders/cmo.png" },
            { name: "Putera Shazmin", role: "COO", image: "/images/cofounders/coo.png" }
          ]
        },
        tech: {
          engineering: {
            members: [
              ...Array(50).fill(null).map((_, i) => ({
                name: "Vacant",
                role: i < 10 ? "Senior Engineer" : "Software Engineer"
              })),
              ...Array(10).fill(null).map(() => ({
                name: "Vacant",
                role: "Software Engineer - Protege"
              })),
              ...Array(15).fill(null).map(() => ({
                name: "Vacant",
                role: "Software Engineer - Intern"
              }))
            ]
          },
        },
        creative: {
          design: {
            members: [
              ...Array(30).fill(null).map((_, i) => ({
                name: "Vacant",
                role: i < 5 ? "Senior Designer" : "Product Designer"
              })),
              ...Array(5).fill(null).map(() => ({
                name: "Vacant",
                role: "Product Designer - Protege"
              })),
              ...Array(8).fill(null).map(() => ({
                name: "Vacant",
                role: "Product Designer - Intern"
              }))
            ]
          },
          animation: {
            members: Array(40).fill(null).map((_, i) => ({
              name: "Vacant",
              role: i < 8 ? "Senior Animator" : "Animator"
            }))
          }
        },
        business: {
          members: Array(30).fill(null).map((_, i) => ({
            name: "Vacant",
            role: ["Product Manager", "Business Analyst", "Marketing Director", "Regional Director", "Country Manager"][i % 5]
          }))
        }
      }
    },
    financials: {
      revenue: {
        target: "RM 50M",
        breakdown: {
          product: "RM 30M",
          consulting: "RM 15M",
          animation: "RM 5M"
        }
      },
      burnRate: "RM 2M/month",
      runway: "18 months",
      status: "Profitable"
    },
    milestones: [
      "Series B Round Completion",
      "ASEAN Market Penetration",
      "500K Active Users Milestone",
      "Launch of Enterprise Solutions",
      "Regional Team Expansion",
      "Animation Studio Establishment"
    ],
    ventures: {
      CareerRPG: {
        status: "ASEAN Market Leader",
        users: "500K",
        revenue: "RM 250M ARR"
      },
      ServisLah: {
        status: "Regional Growth",
        users: "50K businesses",
        revenue: "RM 150M ARR"
      },
      ARespiratory: {
        status: "Global Healthcare Leader",
        users: "100K institutions",
        revenue: "RM 100M ARR"
      }
    },equity: {
        founders: "60%",
        investors: "30%",
        esop: "10%",
        details: "Post Series B"
      },
      
    subsidiaries: [
      {
        name: "NexzGen Technology Services",
        revenue: "RM 25M ARR",
        stage: "Regional Growth",
        divisions: [
          {
            name: "Digital Solutions",
            revenue: "RM 15M ARR",
            units: [
              {
                name: "Web & Mobile",
                revenue: "RM 8M ARR",
                services: ["Web Development", "Mobile Apps", "Cloud Solutions"]
              },
              {
                name: "Enterprise Systems",
                revenue: "RM 7M ARR",
                services: ["CRM Systems", "ERP Integration", "Business Intelligence"]
              }
            ]
          },
          {
            name: "Innovation Division",
            revenue: "RM 10M ARR",
            units: [
              {
                name: "R&D Labs",
                revenue: "RM 6M ARR",
                services: ["Product Innovation", "Tech Research", "Prototyping"]
              },
              {
                name: "Emerging Tech",
                revenue: "RM 4M ARR",
                services: ["AI Solutions", "AR/VR", "IoT Platforms"]
              }
            ]
          }
        ]
      },
      {
        name: "NexzGen Studios",
        revenue: "RM 15M ARR",
        stage: "Market Growth",
        divisions: [
          {
            name: "Creative Production",
            revenue: "RM 8M ARR",
            units: [
              {
                name: "Animation Studio",
                revenue: "RM 5M ARR",
                services: ["3D Animation", "Character Design", "Visual Effects"]
              },
              {
                name: "Digital Media",
                revenue: "RM 3M ARR",
                services: ["Motion Graphics", "Interactive Content", "Digital Marketing"]
              }
            ]
          },
          {
            name: "Design Services",
            revenue: "RM 7M ARR",
            units: [
              {
                name: "Product Design",
                revenue: "RM 4M ARR",
                services: ["UI/UX Design", "Brand Design", "Product Strategy"]
              },
              {
                name: "Creative Services",
                revenue: "RM 3M ARR",
                services: ["Visual Design", "Content Creation", "Brand Identity"]
              }
            ]
          }
        ]
      }
    ]
  },
  '2035': {
    structure: "NexzGen Group Sdn Bhd",
    valuation: "RM 400M",
    funding: "Series C RM 80M",
    status: "APAC Tech Leader",
    team: {
      total: 500,
      breakdown: {
        leadership: {
          members: [
            { name: "Hafiz Kadir", role: "Group CEO", image: "/images/cofounders/ceo.png" },
            { name: "Andi A Ghani", role: "Group CCO", image: "/images/cofounders/cco.png" },
            { name: "Tengku Amirul Haiqal", role: "Group CTO", image: "/images/cofounders/cio.png" },
            { name: "Aliff Farhat", role: "Group CMO", image: "/images/cofounders/cmo.png" },
            { name: "Putera Shazmin", role: "Group COO", image: "/images/cofounders/coo.png" }
          ]
        },
        tech: {
          engineering: {
            members: Array(150).fill(null).map((_, i) => ({
              name: "Vacant",
              role: i < 30 ? "Senior Engineer" : "Software Engineer"
            }))
          }
        },
        creative: {
          design: {
            members: Array(80).fill(null).map((_, i) => ({
              name: "Vacant",
              role: i < 15 ? "Senior Designer" : "Product Designer"
            }))
          },
          animation: {
            members: Array(100).fill(null).map((_, i) => ({
              name: "Vacant",
              role: i < 20 ? "Senior Animator" : "Animator"
            }))
          }
        },
        business: {
          members: Array(70).fill(null).map((_, i) => ({
            name: "Vacant",
            role: ["Product Manager", "Business Analyst", "Marketing Specialist", "Regional Manager"][i % 4]
          }))
        }
      }
    },equity: {
        founders: "55%",
        investors: "35%",
        esop: "10%",
        details: "Post Series C"
      },
      
    financials: {
      revenue: {
        target: "RM 150M",
        breakdown: {
          product: "RM 90M",
          consulting: "RM 40M",
          animation: "RM 20M"
        }
      },
      burnRate: "RM 5M/month",
      runway: "24 months"
    },
    milestones: [
      "Series C Funding Secured",
      "APAC Market Entry",
      "2M Active Users Achievement",
      "Launch of NexzGen Innovation Labs",
      "Regional Office Expansion",
      "Original IP Development",
      "Strategic Partnerships Formation"
    ],
    ventures: {
      CareerRPG: {
        status: "APAC Market Leader",
        users: "2M",
        revenue: "RM 80M ARR"
      },
      ServisLah: {
        status: "ASEAN Market Leader",
        users: "200K businesses",
        revenue: "RM 45M ARR"
      },
      ARespiratory: {
        status: "Regional Leader",
        users: "50K institutions",
        revenue: "RM 25M ARR"
      }
    },
    subsidiaries: [
      {
        name: "NexzGen Global Technologies",
        revenue: "RM 75M ARR",
        stage: "APAC Growth",
        divisions: [
          {
            name: "Enterprise Solutions",
            revenue: "RM 40M ARR",
            units: [
              {
                name: "Digital Transformation",
                revenue: "RM 25M ARR",
                services: ["Cloud Services", "Enterprise Systems", "Digital Integration"]
              },
              {
                name: "Business Applications",
                revenue: "RM 15M ARR",
                services: ["SaaS Solutions", "Custom Development", "Technical Support"]
              }
            ]
          },
          {
            name: "Innovation Labs",
            revenue: "RM 35M ARR",
            units: [
              {
                name: "Research & Development",
                revenue: "RM 20M ARR",
                services: ["AI/ML Research", "Emerging Tech", "Innovation Projects"]
              },
              {
                name: "Future Tech",
                revenue: "RM 15M ARR",
                services: ["Quantum Computing", "Blockchain", "IoT Solutions"]
              }
            ]
          }
        ]
      },
      {
        name: "NexzGen Creative",
        revenue: "RM 45M ARR",
        stage: "Regional Leader",
        divisions: [
          {
            name: "Entertainment Division",
            revenue: "RM 25M ARR",
            units: [
              {
                name: "Animation Studios",
                revenue: "RM 15M ARR",
                services: ["Original IP", "Commercial Animation", "VFX Production"]
              },
              {
                name: "Interactive Media",
                revenue: "RM 10M ARR",
                services: ["Gaming", "AR/VR Experiences", "Digital Content"]
              }
            ]
          },
          {
            name: "Design & Innovation",
            revenue: "RM 20M ARR",
            units: [
              {
                name: "Product Design",
                revenue: "RM 12M ARR",
                services: ["UI/UX Design", "Product Strategy", "Design Systems"]
              },
              {
                name: "Creative Services",
                revenue: "RM 8M ARR",
                services: ["Brand Design", "Motion Graphics", "Digital Marketing"]
              }
            ]
          }
        ]
      }
    ]
  },
  '2040': {
    structure: "NexzGen Berhad (KLSE: NXGN)",
    valuation: "RM 2.5B",
    funding: "IPO KLSE",
    status: "Public Listed - APAC Tech Giant",
    team: {
      total: 1000,
      breakdown: {
        leadership: {
          members: [
            { name: "Hafiz Kadir", role: "Executive Chairman", image: "/images/cofounders/ceo.png" },
            { name: "Andi A Ghani", role: "Vice Chairman", image: "/images/cofounders/cco.png" },
            { name: "Tengku Amirul Haiqal", role: "Group CEO", image: "/images/cofounders/cio.png" },
            { name: "Aliff Farhat", role: "Group President", image: "/images/cofounders/cmo.png" },
            { name: "Putera Shazmin", role: "Group Managing Director", image: "/images/cofounders/coo.png" }
          ]
        },
        tech: {
          engineering: {
            members: Array(300).fill(null).map((_, i) => ({
              name: "Vacant",
              role: i < 60 ? "Senior Engineer" : "Software Engineer"
            }))
          }
        },
        creative: {
          design: {
            members: Array(150).fill(null).map((_, i) => ({
              name: "Vacant",
              role: i < 30 ? "Senior Designer" : "Product Designer"
            }))
          },
          animation: {
            members: Array(200).fill(null).map((_, i) => ({
              name: "Vacant",
              role: i < 40 ? "Senior Animator" : "Animator"
            }))
          }
        },
        business: {
          members: Array(150).fill(null).map((_, i) => ({
            name: "Vacant",
            role: ["Product Manager", "Business Analyst", "Marketing Director", "Regional Director", "Country Manager"][i % 5]
          }))
        }
      }
    },equity: {
        founders: "45%",
        investors: "45%",
        esop: "10%",
        details: "Pre-IPO"
      },
    financials: {
      revenue: {
        target: "RM 500M",
        breakdown: {
          product: "RM 300M",
          consulting: "RM 150M",
          animation: "RM 50M"
        }
      },
      burnRate: "RM 15M/month",
      runway: "36 months",
      status: "Profitable"
    },
    milestones: [
      "Successful IPO on KLSE",
      "5M Active Users Milestone",
      "Global Product Launch",
      "Major Acquisitions Completed",
      "R&D Center Launch",
      "Corporate Leadership Transition",
      "Global Talent Hub Establishment"
    ],
    ventures: {
      CareerRPG: {
        status: "Global Expansion",
        users: "5M",
        revenue: "RM 250M ARR"
      },
      ServisLah: {
        status: "APAC Market Leader",
        users: "500K businesses",
        revenue: "RM 150M ARR"
      },
      ARespiratory: {
        status: "Global Healthcare Leader",
        users: "100K institutions",
        revenue: "RM 100M ARR"
      }
    },
    subsidiaries: [
      {
        name: "NexzGen R&D Sdn Bhd",
        revenue: "RM 750M ARR",
        stage: "Product Innovation",
        divisions: [
          {
            name: "CareerRPG Division",
            revenue: "RM 100M ARR",
            focus: "Gamified Social Media Platform for Next Generation of Professionals",
            units: [
              {
                name: "Professional Platform - Web & Mobile App",
                revenue: "RM 600M ARR",
                services: ["Career Metaverse","Social Network", "Skills Marketplace, Assessment & Certification", "AI Career Coach & Recommendation", "Global Job Board & Recruitment", "User Onboarding with RPG Character Classes", "Quest Board & Leaderboard", "Career Mentoring, Networking & Sharing from Professionals", "Internship/Job placement", "Career Progress Tracking", "Career Development Plan", "EXP, Badges, Coins", "Leaderboard, Challenges & Co-op Guild Quest", "Portfolio Builder"]
              },
              {
                name: "Domain Invasion (Annual Hackathon) - February",
                revenue: "RM 400M ARR",
                services: ["Code Cadets - School","Logic Legions - University", "Tech Titans - Industry","Startup Pitch Competition", "Workshop & Seminar", "Networking", "Prize"]
              },
              {
                name: " Artisan Dynasty (Annual Designathon) - August",
                revenue: "RM 400M ARR",
                services: ["Craft Cadets - School","Design Disciples - University", "Aesthetic Ascendancy - Industry","Ui/Ux Championship","Digital Art Exhibition", "Portfolio Reviews","Workshop & Seminar", "Networking", "Prize"]
              }
            ]
          },
          {
            name: "ServisLah Division",
            revenue: "RM 200M ARR",
            units: [
              {
                name: "Automotive Services - Web & Mobile App",
                revenue: "RM 100M ARR",
                services: ["AI Powered Service Center Management - SLA","Predictive Maintenance", "Appointment System","Real TimeMechanic & Bay Assignation","Parts Inventory Management", "Service Center Analytics","Service Quality Monitoring", "Customer Support"]
              },
              {
                name: "Enterprise Platform - Web & Mobile App",
                revenue: "RM 60M ARR",
                services: ["Multi-Outlet Management", "Business Intelligence", "Customer Relationship Management","Supply Chain Optimization", "Partnership Management", "Financial Analytics", "Operations Management - Hiring, Payroll, Claims, Training, Attendance, Performance, etc."]
              },
              { 
                name: "Consumer/Car Owner - Mobile App",
                revenue: "RM 40M ARR",
                services: ["Vehicle Digital Twin", "AR Service Assistant", "AI Powered Service Booking & Scheduling", "Live status tracking", "Service History","Pickup & Delivery Service", "Insurance Integration", "Loyalty program management", "Communication with Service Advisors", "Payment & Billing", "Analytics", "Customer Support"]
              }
            ]
          },
          {
            name: "ARespiratory Division",
            revenue: "RM IDK ARR",
            units: [
              {
                name: "ARespiratory - Web",
                revenue: "RM IDK ARR",
                services: ["Landing Page","E-commerce","App Features","Demo Video","Partners & Collaborators","Waitlist & Newsletter", "Pricing Page", "Blog", "About Us", "Contact Us", "Live Chat", "Customer Support"]
              },
              {
                name: "ARespiratory - AR Mobile App",
                revenue: "RM 400M ARR",
                services: ["Student/Healthcare Professional Profile","3D Model Anatomy AR Integration","Diagrams & Images","Quizzes & Games","Physiology Animation","Learning Modules", "Quiz Management", "AR Game", "Leaderboard", "Career Mentoring, Networking & Sharing from Healthcare Professionals", "Internship/Job placement"]
              },
              {
                name: "Augmented Reali-Tee Shirt",
                revenue: "IDK ARR",
                services: ["T-Shirt Design","T-Shirt Printing","T-Shirt Shipping","Sales & Marketing","Customer Support"]
              }
            ]
          },
          {
            name: "Blanjer Division",
            revenue: "RM 900M ARR",
            units: [
                {
                    name: "Personal Finance",
                    revenue: "RM 900M ARR",
                    services: ["AI Receipt Scanner","AI Expense Tracker","AI Budget Planner","AI Retirement Planner","AI Insurance Advisor","AI Investment Portfolio", "Analytics", "Crypto Portfolio Manager", "Bill & Subscription Management & Reminder", "Savings Optimization"]
                },{
                    name: "Household Finance",
                    revenue: "RM 900M ARR",
                    services: ["Contribution Tracker", "Leaderboard & Gamification", "Group Finance", "Bill & Subscription Management & Reminder", "Savings Optimization"]
                },{
                    name: "Travel & Lifestyle Group Finance",
                    revenue: "RM 900M ARR",
                    services: ["Group Money Pool", "Group Expense Tracker", "Group Bill & Subscription Management & Reminder", "Event Planner", "Group Travel Planner", "Group Expense Splitter", "Group Bill Splitter", "Group Subscription Splitter"]
                },
                {
                    name: "Business Finance",
                    revenue: "RM 900M ARR",
                    services: ["CapEx & OpEx Management", "Accounting & Tax Management", "Financial Forecast", "Invoice Management", "Payment Management", "Financial Report", "Financial Planning", "Financial Analytic"]
                }
                
            ]
          },
          

        ]
      },
      {
        name: "NexzGen Studios Sdn Bhd",
        revenue: "RM 250M ARR",
        stage: "Entertainment & Media",    
        divisions: [
          {
            name: "Animation & IP Division",
            revenue: "RM 250M ARR",
            units: [
                {
                    name: "Original Production",
                    revenue: "RM 150M ARR",
                    services: ["Storyboard", "Art & VFX", "Script", "Character Design", "Animation", "Post Production", "Rendering", "Compositing", "Sound Design", "Voice Over", "Music", "Final Mix", "Delivery"]
                },
                {
                    name: "Commercial Projects",
                    revenue: "RM 60M ARR",
                    services: [
                      "Advertising Animation",
                      "Corporate Videos",
                      "Product Visualization",
                      "Event Animation",
                      "Motion Graphics"
                    ]
                  },
                {
                    name: "Merchandising",
                    revenue: "RM 100M ARR",
                    services: ["Merchandise Design", "Merchandise Production", "Merchandise Distribution", "Merchandise Marketing", "Merchandise Sales", "Merchandise Customer Support"]
                },
                {
                    name: "Partnership",
                    revenue: "RM 100M ARR",
                    services: ["Partnership Management", "Partnership Marketing", "Partnership Sales", "Partnership Customer Support"]
                },
                
                {
                    name: "Production Services",
                    revenue: "RM 40M ARR",
                    services: [
                      "Animation Outsourcing",
                      "Asset Creation",
                      "Post-Production",
                      "VFX Services",
                      "Technical Support"
                    ]
                  }
            ]
          },
          {
            name: "Interactive XR Division",
            revenue: "RM 250M ARR",
            units: [
                
                {
                    name: "Metaverse Development",
                    revenue: "RM 100M ARR",
                    services: ["Virtual Events", "Virtual Tours", "Virtual Meetings", "Virtual Shopping", "Virtual Training", ]
                },
                {
                    name: "Digital Twins & Experiences",
                    revenue: "RM 100M ARR",
                    services: ["Digital Twins", "Interactive Installations", "Mobile AR", "WebXR", "3D Models", "3D Animations", "3D Rendering"]
                },
                
                
            ]
          },
          {
            name: "Games Division",
            revenue: "RM 250M ARR",
            units: [
                {
                    name: "Game Development",
                    revenue: "RM 150M ARR",
                    services: ["Mobile Games", "PC Games", "Console Games", "Cross-Platform Games", "Educational Games", "VR/AR Games", "Web Games", "Game Design", "Game Programming", "Game Testing", "Game Marketing", "Game Sales", "Game Customer Support"]
                },
                {
                    name: "Game Services",
                    revenue: "RM 150M ARR",
                    services: ["Game Design", "Asset Creation","Game Programming", "Game Testing", "Game Marketing", "Game Sales", "Live Operations", "Player Analytics", "Game Optimization", "Multiplayer Engine", "Game Balance", "Game Economy", "Game AI", "Game Scripting", "Game Level Design", "Game Storytelling", "Game Narrative", "Game Art", "Game Sound", "Game Music"]
                }
                
                
            ]
          },
          {
            name: "Marketing & Media Division",
            revenue: "RM 250M ARR",
            units: [
                {
                    name: "Digital Content",
                    revenue: "RM 150M ARR",
                    services: ["Digital Series", "Documentaries", "Corporate Videos", "Product Videos", "Promotional Videos", "Event Videos", "Tutorial Videos", "Digital Ads", "Digital Marketing", "Branded Content", "Live Events"]
                },
                {
                    name: "Photography & Video Production",
                    revenue: "RM 100M ARR",
                    services: [""]
                },
                {
                    name: "Social Media",
                    revenue: "RM 100M ARR",
                    services: ["Social Media Posting", "Social Media Ads","Account management", "Live Host"]
                }
                
                
            ]
          }
          

        ]   
      },
      {
        name: "NexzGen Ventures Sdn Bhd",
        revenue: "RM 250M ARR",
        stage: "Investment",  
        divisions: [
            {
                name: "Investment Division",
                revenue: "RM 100M ARR",
                units: [
                  {
                    name: "Venture Capital",
                    revenue: "RM 50M ARR",
                    services: [
                      "Early Stage Investment",
                      "Growth Capital",
                      "Strategic Investment",
                      "Fund Management",
                      "Portfolio Management"
                    ]
                  },
                  {
                    name: "Strategic Investment",
                    revenue: "RM 50M ARR",
                    services: [
                      "Buyout",
                      "Growth Capital","Corporate Investment","Partnership Development",
                      "Investment Strategy",
                      "Deal Flow Management"
                    ]
                  },
                  {name: "Innovation Fund",
                    revenue: "RM 20M ARR",
                    services: [
                    "Research Investment",
                    "Innovation Grants",
                    "Startup Support",
                    "Technology Transfer",
                    "Ecosystem Development"
                    ]
                  },
                  
                  
                ]
            },
            {
                name: "Accelerator Division",
                revenue: "RM 60M ARR",
                units: [
                    {
                        name: "Startup Programs",
                        revenue: "RM 30M ARR",
                        services: [
                          "Accelerator Programs",
                          "Incubation Services",
                          "Mentorship Programs",
                          "Startup Resources",
                          "Network Access"
                        ]   
                    },
                    {
                        name: "Corporate Innovation",
                        revenue: "RM 20M ARR",
                        services: [
                        "Innovation Programs",
                        "Corporate Accelerator",
                        "Innovation Labs",
                        "Partnership Programs",
                        "Corporate Ventures"
                        ]
                        },
                        {
                        name: "Global Programs",
                        revenue: "RM 10M ARR",
                        services: [
                        "International Expansion",
                        "Global Network",
                        "Cross-border Programs",
                        "Market Access",
                        "Global Partnerships"
                        ]
                        }
                ]
            }
        ]
      },
      {
        name: "NexzGen Academy Sdn Bhd",
        revenue: "RM 250M ARR",
        stage: "Education Technology",    
        divisions: [
          {
            name: "AI E-Learning Platform",
            revenue: "RM 250M ARR",
            units: [
                {
                    name: "Technical Training",
                    revenue: "RM 100M ARR",
                    services: [
                      "Software Development",
                      "Data Science",
                      "Cloud Computing",
                      "Cybersecurity",
                      "AI & ML"
                    ]
                  },
                  {
                    name: "Creative Education",
                    revenue: "RM 60M ARR",
                    services: [
                      "Animation Training",
                      "Game Development",
                      "Digital Design",
                      "3D Modeling",
                      "Visual Effects"
                    ]
                  },
                  {
                    name: "Business Skills",
                    revenue: "RM 40M ARR",
                    services: [
                      "Project Management",
                      "Digital Marketing",
                      "Business Analysis",
                      "Leadership Development",
                      "Agile Methodologies"
                    ]
                  }
            ]
          },
          {
            name: "Corporate Training ",
            revenue: "RM 250M ARR",
            units: [
                {
                    name: "Enterprise Learning",
                    revenue: "RM 60M ARR",
                    services: [
                      "Custom Training Programs",
                      "Team Development",
                      "Executive Education",
                      "Digital Transformation",
                      "Innovation Training"
                    ]
                  },
                  {
                    name: "Learning Technology",
                    revenue: "RM 40M ARR",
                    services: [
                      "LMS Platform",
                      "Assessment Tools",
                      "Content Development",
                      "Analytics Dashboard",
                      "Mobile Learning"
                    ]
                  },
                  {
                    name: "Certification Programs",
                    revenue: "RM 20M ARR",
                    services: [
                      "Industry Certifications",
                      "Professional Credentials",
                      "Skill Verification",
                      "Assessment Centers",
                      "Career Pathways"
                    ]
                  }

            ]
          },
          
          {
            name: "Innovation Campus",
            revenue: "RM 80M ARR",
          units: [
            {
              name: "Research Programs",
              revenue: "RM 40M ARR",
              services: [
                "Applied Research",
                "Industry Projects",
                "Innovation Labs",
                "Technology Research",
                "Future Skills"
              ]
            },
            {
              name: "Startup School",
              revenue: "RM 25M ARR",
              services: [
                "Founder Training",
                "Startup Mentorship",
                "Innovation Programs",
                "Accelerator Support",
                "Entrepreneurship"
              ]
            },
            {
              name: "Global Programs",
              revenue: "RM 15M ARR",
              services: [
                "International Partnerships",
                "Exchange Programs",
                "Global Projects",
                "Cultural Innovation",
                "Cross-border Collaboration"
              ]
            }
          ]
        }
        ]
      },
      {
        name: "NexzGen Labs Sdn Bhd",
        revenue: "RM 450M ARR",
        stage: "Digital Services Leader",
        divisions: [
          {
            name: "Enterprise Solutions",
            revenue: "RM 200M ARR",
            units: [
              {
                name: "Digital Transformation",
                revenue: "RM 100M ARR",
                services: [
                  "Enterprise Architecture",
                  "Cloud Migration",
                  "Process Automation",
                  "Data Analytics",
                  "Digital Strategy"
                ]
              },
              {
                name: "Custom Development",
                revenue: "RM 60M ARR",
                services: [
                  "Enterprise Applications",
                  "Mobile Solutions",
                  "Web Platforms",
                  "Integration Services",
                  "Legacy Modernization"
                ]
              },
              {
                name: "Technology Consulting",
                revenue: "RM 40M ARR",
                services: [
                  "Technology Strategy",
                  "Innovation Consulting",
                  "Digital Roadmap",
                  "Technology Assessment",
                  "Architecture Review"
                ]
              }
            ]
          },
          {
            name: "Innovation Services",
            revenue: "RM 150M ARR",
            units: [
              {
                name: "Emerging Tech",
                revenue: "RM 70M ARR",
                services: [
                  "AI & ML Solutions",
                  "Blockchain Development",
                  "IoT Platforms",
                  "AR/VR Applications",
                  "Edge Computing"
                ]
              },
              {
                name: "Research & Development",
                revenue: "RM 50M ARR",
                services: [
                  "Applied Research",
                  "Prototype Development",
                  "Technology Innovation",
                  "Proof of Concept",
                  "Innovation Labs"
                ]
              },
              {
                name: "Innovation Consulting",
                revenue: "RM 30M ARR",
                services: [
                  "Innovation Strategy",
                  "Digital Innovation",
                  "Technology Roadmap",
                  "Innovation Programs",
                  "Future Tech Advisory"
                ]
              }
            ]
          },
          {
            name: "Managed Services",
            revenue: "RM 100M ARR",
            units: [
              {
                name: "Cloud Services",
                revenue: "RM 50M ARR",
                services: [
                  "Cloud Management",
                  "Infrastructure Services",
                  "DevOps",
                  "Security Services",
                  "Performance Optimization"
                ]
              },
              {
                name: "Application Services",
                revenue: "RM 30M ARR",
                services: [
                  "Application Management",
                  "Support Services",
                  "Maintenance",
                  "Enhancement Services",
                  "Quality Assurance"
                ]
              },
              {
                name: "Digital Operations",
                revenue: "RM 20M ARR",
                services: [
                  "IT Operations",
                  "Service Desk",
                  "Monitoring Services",
                  "Business Continuity",
                  "Digital Workplace"
                ]
              }
            ]
          }
        ]
      },
      {
        name: "NexzGen Finnect Sdn Bhd",
        revenue: "RM 150M ARR",
        stage: "Digital Banking Pioneer",
        divisions: [
          {
            name: "Digital Banking",
            revenue: "RM 80M ARR",
            units: [
              {
                name: "Personal Banking",
                revenue: "RM 40M ARR",
                services: [
                  "Islamic Digital Accounts",
                  "Shariah-Compliant Investment",
                  "Halal Payment Services",
                  "Zakat Management",
                  "Personal Financing (Islamic)",
                  "Gold Investment",
                  "Family Takaful",
                  "Digital Remittance",
                  "Bill Payments",
                  "Automated Savings"
                ]
              },
              {
                name: "Business Banking",
                revenue: "RM 25M ARR",
                services: [
                  "Business Accounts (Islamic)",
                  "SME Solutions",
                  "Trade Finance (Shariah)",
                  "Business Financing",
                  "Merchant Services",
                  "B2B Payments",
                  "Supply Chain Finance",
                  "Invoice Financing",
                  "Business Zakat",
                  "Corporate Solutions"
                ]
              },
              {
                name: "Banking Platform",
                revenue: "RM 15M ARR",
                services: [
                  "Islamic Banking-as-a-Service",
                  "Shariah-Compliant APIs",
                  "Payment Infrastructure",
                  "Compliance Engine",
                  "Risk Management",
                  "Islamic Finance Analytics",
                  "Regulatory Reporting",
                  "Partner Integration",
                  "Security Services",
                  "Financial Crime Prevention"
                ]
              }
            ]
          },
          {
            name: "Financial Management",
            revenue: "RM 40M ARR",
            units: [
              {
                name: "Personal Finance",
                revenue: "RM 20M ARR",
                services: [
                  "Smart Expense Tracking",
                  "Intelligent Budgeting",
                  "Goal-Based Savings",
                  "Halal Investment Tracking",
                  "Financial Health Score",
                  "Personalized Insights",
                  "Bills Management",
                  "Subscription Tracking",
                  "Wealth Dashboard",
                  "Financial Education"
                ]
              },
              {
                name: "Group Finance",
                revenue: "RM 12M ARR",
                services: [
                  "Group Expense Management",
                  "Smart Split Bills",
                  "Travel Fund Management",
                  "Event Planning & Budgeting",
                  "Shared Household Expenses",
                  "Family Finance",
                  "Group Savings",
                  "Expense Analytics",
                  "Payment Collection",
                  "Group Reports"
                ]
              },
              {
                name: "Business Finance",
                revenue: "RM 8M ARR",
                services: [
                  "Business Analytics",
                  "Cash Flow Forecasting",
                  "Expense Management",
                  "Automated Bookkeeping",
                  "Financial Planning",
                  "Business Insights",
                  "Tax Management",
                  "Vendor Payments",
                  "Payroll Solutions",
                  "Financial Reports"
                ]
              }
            ]
          },
          {
            name: "Innovation Division",
            revenue: "RM 30M ARR",
            units: [
              {
                name: "Future Banking",
                revenue: "RM 15M ARR",
                services: [
                  "AI Financial Assistant",
                  "Voice Banking",
                  "Smart Contracts",
                  "Biometric Security",
                  "Open Banking Platform",
                  "Blockchain Solutions",
                  "IoT Payments",
                  "Digital Identity",
                  "Quantum Security",
                  "Future Payment Systems"
                ]
              },
              {
                name: "Research & Development",
                revenue: "RM 10M ARR",
                services: [
                  "FinTech Research",
                  "Islamic Finance Innovation",
                  "Banking Technology",
                  "Security Research",
                  "Payment Innovation",
                  "User Experience",
                  "Data Analytics",
                  "Market Research",
                  "Technology Trials",
                  "Product Innovation"
                ]
              },
              {
                name: "Partner Ecosystem",
                revenue: "RM 5M ARR",
                services: [
                  "Partner Integration",
                  "API Marketplace",
                  "Developer Platform",
                  "Partnership Programs",
                  "Ecosystem Analytics",
                  "Partner Support",
                  "Documentation",
                  "Testing Environment",
                  "Compliance Tools",
                  "Community Building"
                ]
              }
            ]
          }
        ]
      },
      {
        name: "NexzGen Lifestyle Sdn Bhd",
        revenue: "RM 120M ARR",
        stage: "Lifestyle Innovation Leader",
        divisions: [
          {
            name: "The Zone (F&B Division)",
            revenue: "RM 60M ARR",
            units: [
              {
                name: "Corporate F&B",
                revenue: "RM 30M ARR",
                services: [
                  "Smart Corporate Cafeterias",
                  "Coffee Corners & Lounges",
                  "Food Courts Management",
                  "Executive Dining",
                  "Event Catering Services",
                  "Smart Vending Solutions",
                  "Office Pantry Services",
                  "Food Delivery Platform",
                  "Nutrition Planning",
                  "Digital Payment Integration"
                ]
              },
              {
                name: "Supply Chain",
                revenue: "RM 20M ARR",
                services: [
                  "Food Security Management",
                  "Supplier Network",
                  "Quality Assurance",
                  "Inventory Management",
                  "Smart Logistics",
                  "Cold Chain Solutions",
                  "Sustainable Sourcing",
                  "Vendor Management",
                  "Cost Optimization",
                  "Supply Analytics"
                ]
              },
              {
                name: "Food Innovation",
                revenue: "RM 10M ARR",
                services: [
                  "Menu Engineering",
                  "Nutritional Science",
                  "Sustainable Food Tech",
                  "Smart Kitchen Systems",
                  "Food Safety Innovation",
                  "Culinary R&D",
                  "Dietary Solutions",
                  "Food Analytics",
                  "Waste Reduction",
                  "Future Food Research"
                ]
              }
            ]
          },
          {
            name: "NexzGen Merch",
            revenue: "RM 40M ARR",
            units: [
              {
                name: "Corporate Merchandise",
                revenue: "RM 20M ARR",
                services: [
                  "Corporate Apparel Design",
                  "Premium Brand Merchandise",
                  "Event Merchandise",
                  "Custom Products",
                  "Anniversary Collections",
                  "Recognition Awards",
                  "Corporate Gifts",
                  "Seasonal Collections",
                  "Limited Editions",
                  "Personalization Services"
                ]
              },
              {
                name: "Manufacturing & Supply",
                revenue: "RM 12M ARR",
                services: [
                  "Production Management",
                  "Quality Control Systems",
                  "Supply Chain Operations",
                  "Inventory Solutions",
                  "Distribution Network",
                  "Sustainable Production",
                  "Material Sourcing",
                  "Manufacturing Innovation",
                  "Process Automation",
                  "Logistics Management"
                ]
              },
              {
                name: "Business Solutions",
                revenue: "RM 8M ARR",
                services: [
                  "Corporate Programs",
                  "Onboarding Kits",
                  "Brand Solutions",
                  "Event Packages",
                  "Bulk Orders",
                  "Custom Design Services",
                  "Digital Catalogs",
                  "Online Ordering",
                  "Analytics Platform",
                  "Client Management"
                ]
              }
            ]
          },
          {
            name: "Experience Division",
            revenue: "RM 20M ARR",
            units: [
              {
                name: "Workplace Experience",
                revenue: "RM 10M ARR",
                services: [
                  "Office Environment Design",
                  "Experience Centers",
                  "Innovation Spaces",
                  "Collaboration Zones",
                  "Wellness Areas",
                  "Digital Workplace",
                  "Smart Office Solutions",
                  "Event Spaces",
                  "Community Areas",
                  "Experience Management"
                ]
              },
              {
                name: "Brand Experience",
                revenue: "RM 6M ARR",
                services: [
                  "Brand Activations",
                  "Pop-up Experiences",
                  "Interactive Displays",
                  "Digital Engagement",
                  "Experience Design",
                  "Brand Storytelling",
                  "Customer Journey",
                  "Experience Analytics",
                  "Community Building",
                  "Engagement Programs"
                ]
              },
              {
                name: "Innovation Lab",
                revenue: "RM 4M ARR",
                services: [
                  "Experience Research",
                  "Future Workspace",
                  "Innovation Projects",
                  "User Testing",
                  "Prototype Development",
                  "Technology Integration",
                  "Sustainability Solutions",
                  "Smart Systems",
                  "Data Analytics",
                  "Experience Innovation"
                ]
              }
            ]
          }
        ]
      }
      
       
    ]
  },
  '2045': {
    structure: "NexzGen Berhad (KLSE:NXGN, SGX:NXGN)",
    valuation: "RM 10B",
    funding: "Dual Listed KLSE & SGX",
    status: "ASEAN Tech Leader",
    team: {
      total: 2000,
      breakdown: {
        leadership: {
          members: [
            { name: "Hafiz Kadir", role: "Group Executive Chairman", image: "/images/cofounders/ceo.png" },
            { name: "Next Generation Leadership", role: "Various C-Suite Positions" }
          ]
        },
        divisions: {
          members: Array(1800).fill(null).map((_, i) => ({
            name: "Vacant",
            role: [
              "Technology Division",
              "Product Innovation",
              "Regional Operations",
              "Global Business Development",
              "Research & Development"
            ][i % 5]
          }))
        }
      }
    },
    financials: {
      revenue: {
        target: "RM 1.5B",
        breakdown: {
          product: "RM 900M",
          consulting: "RM 400M",
          animation: "RM 200M"
        }
      },
      burnRate: "RM 40M/month",
      runway: "48 months",
      status: "High Growth Profitable"
    },
    milestones: [
      "Dual Listing Achievement",
      "10M Global Users Milestone",
      "Quantum Computing Division Launch",
      "Global Innovation Centers",
      "Sustainability Initiative Launch",
      "Next-Gen Leadership Transition",
      "Strategic Global Partnerships"
    ],equity: {
        founders: "35%",
        investors: "55%",
        esop: "10%",
        details: "Post-IPO"
      },
      
    ventures: {
      CareerRPG: {
        status: "Global EdTech Leader",
        users: "10M",
        revenue: "RM 750M ARR"
      },
      ServisLah: {
        status: "Global Enterprise Solution",
        users: "1M businesses",
        revenue: "RM 500M ARR"
      },
      ARespiratory: {
        status: "Global Medical Standard",
        users: "200K institutions",
        revenue: "RM 250M ARR"
      }
    },
        subsidiaries: [
            {
                name: "NexzGen R&D Sdn Bhd",
                revenue: "RM 750M ARR",
                stage: "Product Innovation",
                divisions: [
                  {
                    name: "CareerRPG Division",
                    revenue: "RM 100M ARR",
                    focus: "Gamified Social Media Platform for Next Generation of Professionals",
                    units: [
                      {
                        name: "Professional Platform - Web & Mobile App",
                        revenue: "RM 600M ARR",
                        services: ["Career Metaverse","Social Network", "Skills Marketplace, Assessment & Certification", "AI Career Coach & Recommendation", "Global Job Board & Recruitment", "User Onboarding with RPG Character Classes", "Quest Board & Leaderboard", "Career Mentoring, Networking & Sharing from Professionals", "Internship/Job placement", "Career Progress Tracking", "Career Development Plan", "EXP, Badges, Coins", "Leaderboard, Challenges & Co-op Guild Quest", "Portfolio Builder"]
                      },
                      {
                        name: "Domain Invasion (Annual Hackathon) - February",
                        revenue: "RM 400M ARR",
                        services: ["Code Cadets - School","Logic Legions - University", "Tech Titans - Industry","Startup Pitch Competition", "Workshop & Seminar", "Networking", "Prize"]
                      },
                      {
                        name: " Artisan Dynasty (Annual Designathon) - August",
                        revenue: "RM 400M ARR",
                        services: ["Craft Cadets - School","Design Disciples - University", "Aesthetic Ascendancy - Industry","Ui/Ux Championship","Digital Art Exhibition", "Portfolio Reviews","Workshop & Seminar", "Networking", "Prize"]
                      }
                    ]
                  },
                  {
                    name: "ServisLah Division",
                    revenue: "RM 200M ARR",
                    units: [
                      {
                        name: "Automotive Services - Web & Mobile App",
                        revenue: "RM 100M ARR",
                        services: ["AI Powered Service Center Management - SLA","Predictive Maintenance", "Appointment System","Real TimeMechanic & Bay Assignation","Parts Inventory Management", "Service Center Analytics","Service Quality Monitoring", "Customer Support"]
                      },
                      {
                        name: "Enterprise Platform - Web & Mobile App",
                        revenue: "RM 60M ARR",
                        services: ["Multi-Outlet Management", "Business Intelligence", "Customer Relationship Management","Supply Chain Optimization", "Partnership Management", "Financial Analytics", "Operations Management - Hiring, Payroll, Claims, Training, Attendance, Performance, etc."]
                      },
                      { 
                        name: "Consumer/Car Owner - Mobile App",
                        revenue: "RM 40M ARR",
                        services: ["Vehicle Digital Twin", "AR Service Assistant", "AI Powered Service Booking & Scheduling", "Live status tracking", "Service History","Pickup & Delivery Service", "Insurance Integration", "Loyalty program management", "Communication with Service Advisors", "Payment & Billing", "Analytics", "Customer Support"]
                      }
                    ]
                  },
                  {
                    name: "ARespiratory Division",
                    revenue: "RM IDK ARR",
                    units: [
                      {
                        name: "ARespiratory - Web",
                        revenue: "RM IDK ARR",
                        services: ["Landing Page","E-commerce","App Features","Demo Video","Partners & Collaborators","Waitlist & Newsletter", "Pricing Page", "Blog", "About Us", "Contact Us", "Live Chat", "Customer Support"]
                      },
                      {
                        name: "ARespiratory - AR Mobile App",
                        revenue: "RM 400M ARR",
                        services: ["Student/Healthcare Professional Profile","3D Model Anatomy AR Integration","Diagrams & Images","Quizzes & Games","Physiology Animation","Learning Modules", "Quiz Management", "AR Game", "Leaderboard", "Career Mentoring, Networking & Sharing from Healthcare Professionals", "Internship/Job placement"]
                      },
                      {
                        name: "Augmented Reali-Tee Shirt",
                        revenue: "IDK ARR",
                        services: ["T-Shirt Design","T-Shirt Printing","T-Shirt Shipping","Sales & Marketing","Customer Support"]
                      }
                    ]
                  },
                  {
                    name: "Blanjer Division",
                    revenue: "RM 900M ARR",
                    units: [
                        {
                            name: "Personal Finance",
                            revenue: "RM 900M ARR",
                            services: ["AI Receipt Scanner","AI Expense Tracker","AI Budget Planner","AI Retirement Planner","AI Insurance Advisor","AI Investment Portfolio", "Analytics", "Crypto Portfolio Manager", "Bill & Subscription Management & Reminder", "Savings Optimization"]
                        },{
                            name: "Household Finance",
                            revenue: "RM 900M ARR",
                            services: ["Contribution Tracker", "Leaderboard & Gamification", "Group Finance", "Bill & Subscription Management & Reminder", "Savings Optimization"]
                        },{
                            name: "Travel & Lifestyle Group Finance",
                            revenue: "RM 900M ARR",
                            services: ["Group Money Pool", "Group Expense Tracker", "Group Bill & Subscription Management & Reminder", "Event Planner", "Group Travel Planner", "Group Expense Splitter", "Group Bill Splitter", "Group Subscription Splitter"]
                        },
                        {
                            name: "Business Finance",
                            revenue: "RM 900M ARR",
                            services: ["CapEx & OpEx Management", "Accounting & Tax Management", "Financial Forecast", "Invoice Management", "Payment Management", "Financial Report", "Financial Planning", "Financial Analytic"]
                        }
                        
                    ]
                  },
                  
        
                ]
              },
              {
                name: "NexzGen Studios Sdn Bhd",
                revenue: "RM 250M ARR",
                stage: "Entertainment & Media",    
                divisions: [
                  {
                    name: "Animation & IP Division",
                    revenue: "RM 250M ARR",
                    units: [
                        {
                            name: "Original Production",
                            revenue: "RM 150M ARR",
                            services: ["Storyboard", "Art & VFX", "Script", "Character Design", "Animation", "Post Production", "Rendering", "Compositing", "Sound Design", "Voice Over", "Music", "Final Mix", "Delivery"]
                        },
                        {
                            name: "Commercial Projects",
                            revenue: "RM 60M ARR",
                            services: [
                              "Advertising Animation",
                              "Corporate Videos",
                              "Product Visualization",
                              "Event Animation",
                              "Motion Graphics"
                            ]
                          },
                        {
                            name: "Merchandising",
                            revenue: "RM 100M ARR",
                            services: ["Merchandise Design", "Merchandise Production", "Merchandise Distribution", "Merchandise Marketing", "Merchandise Sales", "Merchandise Customer Support"]
                        },
                        {
                            name: "Partnership",
                            revenue: "RM 100M ARR",
                            services: ["Partnership Management", "Partnership Marketing", "Partnership Sales", "Partnership Customer Support"]
                        },
                        
                        {
                            name: "Production Services",
                            revenue: "RM 40M ARR",
                            services: [
                              "Animation Outsourcing",
                              "Asset Creation",
                              "Post-Production",
                              "VFX Services",
                              "Technical Support"
                            ]
                          }
                    ]
                  },
                  {
                    name: "Interactive XR Division",
                    revenue: "RM 250M ARR",
                    units: [
                        
                        {
                            name: "Metaverse Development",
                            revenue: "RM 100M ARR",
                            services: ["Virtual Events", "Virtual Tours", "Virtual Meetings", "Virtual Shopping", "Virtual Training", ]
                        },
                        {
                            name: "Digital Twins & Experiences",
                            revenue: "RM 100M ARR",
                            services: ["Digital Twins", "Interactive Installations", "Mobile AR", "WebXR", "3D Models", "3D Animations", "3D Rendering"]
                        },
                        
                        
                    ]
                  },
                  {
                    name: "Games Division",
                    revenue: "RM 250M ARR",
                    units: [
                        {
                            name: "Game Development",
                            revenue: "RM 150M ARR",
                            services: ["Mobile Games", "PC Games", "Console Games", "Cross-Platform Games", "Educational Games", "VR/AR Games", "Web Games", "Game Design", "Game Programming", "Game Testing", "Game Marketing", "Game Sales", "Game Customer Support"]
                        },
                        {
                            name: "Game Services",
                            revenue: "RM 150M ARR",
                            services: ["Game Design", "Asset Creation","Game Programming", "Game Testing", "Game Marketing", "Game Sales", "Live Operations", "Player Analytics", "Game Optimization", "Multiplayer Engine", "Game Balance", "Game Economy", "Game AI", "Game Scripting", "Game Level Design", "Game Storytelling", "Game Narrative", "Game Art", "Game Sound", "Game Music"]
                        }
                        
                        
                    ]
                  },
                  {
                    name: "Marketing & Media Division",
                    revenue: "RM 250M ARR",
                    units: [
                        {
                            name: "Digital Content",
                            revenue: "RM 150M ARR",
                            services: ["Digital Series", "Documentaries", "Corporate Videos", "Product Videos", "Promotional Videos", "Event Videos", "Tutorial Videos", "Digital Ads", "Digital Marketing", "Branded Content", "Live Events"]
                        },
                        {
                            name: "Photography & Video Production",
                            revenue: "RM 100M ARR",
                            services: [""]
                        },
                        {
                            name: "Social Media",
                            revenue: "RM 100M ARR",
                            services: ["Social Media Posting", "Social Media Ads","Account management", "Live Host"]
                        }
                        
                        
                    ]
                  }
                  
        
                ]   
              },
              {
                name: "NexzGen Ventures Sdn Bhd",
                revenue: "RM 250M ARR",
                stage: "Investment",  
                divisions: [
                    {
                        name: "Investment Division",
                        revenue: "RM 100M ARR",
                        units: [
                          {
                            name: "Venture Capital",
                            revenue: "RM 50M ARR",
                            services: [
                              "Early Stage Investment",
                              "Growth Capital",
                              "Strategic Investment",
                              "Fund Management",
                              "Portfolio Management"
                            ]
                          },
                          {
                            name: "Strategic Investment",
                            revenue: "RM 50M ARR",
                            services: [
                              "Buyout",
                              "Growth Capital","Corporate Investment","Partnership Development",
                              "Investment Strategy",
                              "Deal Flow Management"
                            ]
                          },
                          {name: "Innovation Fund",
                            revenue: "RM 20M ARR",
                            services: [
                            "Research Investment",
                            "Innovation Grants",
                            "Startup Support",
                            "Technology Transfer",
                            "Ecosystem Development"
                            ]
                          },
                          
                          
                        ]
                    },
                    {
                        name: "Accelerator Division",
                        revenue: "RM 60M ARR",
                        units: [
                            {
                                name: "Startup Programs",
                                revenue: "RM 30M ARR",
                                services: [
                                  "Accelerator Programs",
                                  "Incubation Services",
                                  "Mentorship Programs",
                                  "Startup Resources",
                                  "Network Access"
                                ]   
                            },
                            {
                                name: "Corporate Innovation",
                                revenue: "RM 20M ARR",
                                services: [
                                "Innovation Programs",
                                "Corporate Accelerator",
                                "Innovation Labs",
                                "Partnership Programs",
                                "Corporate Ventures"
                                ]
                                },
                                {
                                name: "Global Programs",
                                revenue: "RM 10M ARR",
                                services: [
                                "International Expansion",
                                "Global Network",
                                "Cross-border Programs",
                                "Market Access",
                                "Global Partnerships"
                                ]
                                }
                        ]
                    }
                ]
              },
              {
                name: "NexzGen Academy Sdn Bhd",
                revenue: "RM 250M ARR",
                stage: "Education Technology",    
                divisions: [
                  {
                    name: "AI E-Learning Platform",
                    revenue: "RM 250M ARR",
                    units: [
                        {
                            name: "Technical Training",
                            revenue: "RM 100M ARR",
                            services: [
                              "Software Development",
                              "Data Science",
                              "Cloud Computing",
                              "Cybersecurity",
                              "AI & ML"
                            ]
                          },
                          {
                            name: "Creative Education",
                            revenue: "RM 60M ARR",
                            services: [
                              "Animation Training",
                              "Game Development",
                              "Digital Design",
                              "3D Modeling",
                              "Visual Effects"
                            ]
                          },
                          {
                            name: "Business Skills",
                            revenue: "RM 40M ARR",
                            services: [
                              "Project Management",
                              "Digital Marketing",
                              "Business Analysis",
                              "Leadership Development",
                              "Agile Methodologies"
                            ]
                          }
                    ]
                  },
                  {
                    name: "Corporate Training ",
                    revenue: "RM 250M ARR",
                    units: [
                        {
                            name: "Enterprise Learning",
                            revenue: "RM 60M ARR",
                            services: [
                              "Custom Training Programs",
                              "Team Development",
                              "Executive Education",
                              "Digital Transformation",
                              "Innovation Training"
                            ]
                          },
                          {
                            name: "Learning Technology",
                            revenue: "RM 40M ARR",
                            services: [
                              "LMS Platform",
                              "Assessment Tools",
                              "Content Development",
                              "Analytics Dashboard",
                              "Mobile Learning"
                            ]
                          },
                          {
                            name: "Certification Programs",
                            revenue: "RM 20M ARR",
                            services: [
                              "Industry Certifications",
                              "Professional Credentials",
                              "Skill Verification",
                              "Assessment Centers",
                              "Career Pathways"
                            ]
                          }
        
                    ]
                  },
                  
                  {
                    name: "Innovation Campus",
                    revenue: "RM 80M ARR",
                  units: [
                    {
                      name: "Research Programs",
                      revenue: "RM 40M ARR",
                      services: [
                        "Applied Research",
                        "Industry Projects",
                        "Innovation Labs",
                        "Technology Research",
                        "Future Skills"
                      ]
                    },
                    {
                      name: "Startup School",
                      revenue: "RM 25M ARR",
                      services: [
                        "Founder Training",
                        "Startup Mentorship",
                        "Innovation Programs",
                        "Accelerator Support",
                        "Entrepreneurship"
                      ]
                    },
                    {
                      name: "Global Programs",
                      revenue: "RM 15M ARR",
                      services: [
                        "International Partnerships",
                        "Exchange Programs",
                        "Global Projects",
                        "Cultural Innovation",
                        "Cross-border Collaboration"
                      ]
                    }
                  ]
                }
                ]
              },
              {
                name: "NexzGen Labs Sdn Bhd",
                revenue: "RM 450M ARR",
                stage: "Digital Services Leader",
                divisions: [
                  {
                    name: "Enterprise Solutions",
                    revenue: "RM 200M ARR",
                    units: [
                      {
                        name: "Digital Transformation",
                        revenue: "RM 100M ARR",
                        services: [
                          "Enterprise Architecture",
                          "Cloud Migration",
                          "Process Automation",
                          "Data Analytics",
                          "Digital Strategy"
                        ]
                      },
                      {
                        name: "Custom Development",
                        revenue: "RM 60M ARR",
                        services: [
                          "Enterprise Applications",
                          "Mobile Solutions",
                          "Web Platforms",
                          "Integration Services",
                          "Legacy Modernization"
                        ]
                      },
                      {
                        name: "Technology Consulting",
                        revenue: "RM 40M ARR",
                        services: [
                          "Technology Strategy",
                          "Innovation Consulting",
                          "Digital Roadmap",
                          "Technology Assessment",
                          "Architecture Review"
                        ]
                      }
                    ]
                  },
                  {
                    name: "Innovation Services",
                    revenue: "RM 150M ARR",
                    units: [
                      {
                        name: "Emerging Tech",
                        revenue: "RM 70M ARR",
                        services: [
                          "AI & ML Solutions",
                          "Blockchain Development",
                          "IoT Platforms",
                          "AR/VR Applications",
                          "Edge Computing"
                        ]
                      },
                      {
                        name: "Research & Development",
                        revenue: "RM 50M ARR",
                        services: [
                          "Applied Research",
                          "Prototype Development",
                          "Technology Innovation",
                          "Proof of Concept",
                          "Innovation Labs"
                        ]
                      },
                      {
                        name: "Innovation Consulting",
                        revenue: "RM 30M ARR",
                        services: [
                          "Innovation Strategy",
                          "Digital Innovation",
                          "Technology Roadmap",
                          "Innovation Programs",
                          "Future Tech Advisory"
                        ]
                      }
                    ]
                  },
                  {
                    name: "Managed Services",
                    revenue: "RM 100M ARR",
                    units: [
                      {
                        name: "Cloud Services",
                        revenue: "RM 50M ARR",
                        services: [
                          "Cloud Management",
                          "Infrastructure Services",
                          "DevOps",
                          "Security Services",
                          "Performance Optimization"
                        ]
                      },
                      {
                        name: "Application Services",
                        revenue: "RM 30M ARR",
                        services: [
                          "Application Management",
                          "Support Services",
                          "Maintenance",
                          "Enhancement Services",
                          "Quality Assurance"
                        ]
                      },
                      {
                        name: "Digital Operations",
                        revenue: "RM 20M ARR",
                        services: [
                          "IT Operations",
                          "Service Desk",
                          "Monitoring Services",
                          "Business Continuity",
                          "Digital Workplace"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                name: "NexzGen Finnect Sdn Bhd",
                revenue: "RM 150M ARR",
                stage: "Digital Banking Pioneer",
                divisions: [
                  {
                    name: "Digital Banking",
                    revenue: "RM 80M ARR",
                    units: [
                      {
                        name: "Personal Banking",
                        revenue: "RM 40M ARR",
                        services: [
                          "Islamic Digital Accounts",
                          "Shariah-Compliant Investment",
                          "Halal Payment Services",
                          "Zakat Management",
                          "Personal Financing (Islamic)",
                          "Gold Investment",
                          "Family Takaful",
                          "Digital Remittance",
                          "Bill Payments",
                          "Automated Savings"
                        ]
                      },
                      {
                        name: "Business Banking",
                        revenue: "RM 25M ARR",
                        services: [
                          "Business Accounts (Islamic)",
                          "SME Solutions",
                          "Trade Finance (Shariah)",
                          "Business Financing",
                          "Merchant Services",
                          "B2B Payments",
                          "Supply Chain Finance",
                          "Invoice Financing",
                          "Business Zakat",
                          "Corporate Solutions"
                        ]
                      },
                      {
                        name: "Banking Platform",
                        revenue: "RM 15M ARR",
                        services: [
                          "Islamic Banking-as-a-Service",
                          "Shariah-Compliant APIs",
                          "Payment Infrastructure",
                          "Compliance Engine",
                          "Risk Management",
                          "Islamic Finance Analytics",
                          "Regulatory Reporting",
                          "Partner Integration",
                          "Security Services",
                          "Financial Crime Prevention"
                        ]
                      }
                    ]
                  },
                  {
                    name: "Financial Management",
                    revenue: "RM 40M ARR",
                    units: [
                      {
                        name: "Personal Finance",
                        revenue: "RM 20M ARR",
                        services: [
                          "Smart Expense Tracking",
                          "Intelligent Budgeting",
                          "Goal-Based Savings",
                          "Halal Investment Tracking",
                          "Financial Health Score",
                          "Personalized Insights",
                          "Bills Management",
                          "Subscription Tracking",
                          "Wealth Dashboard",
                          "Financial Education"
                        ]
                      },
                      {
                        name: "Group Finance",
                        revenue: "RM 12M ARR",
                        services: [
                          "Group Expense Management",
                          "Smart Split Bills",
                          "Travel Fund Management",
                          "Event Planning & Budgeting",
                          "Shared Household Expenses",
                          "Family Finance",
                          "Group Savings",
                          "Expense Analytics",
                          "Payment Collection",
                          "Group Reports"
                        ]
                      },
                      {
                        name: "Business Finance",
                        revenue: "RM 8M ARR",
                        services: [
                          "Business Analytics",
                          "Cash Flow Forecasting",
                          "Expense Management",
                          "Automated Bookkeeping",
                          "Financial Planning",
                          "Business Insights",
                          "Tax Management",
                          "Vendor Payments",
                          "Payroll Solutions",
                          "Financial Reports"
                        ]
                      }
                    ]
                  },
                  {
                    name: "Innovation Division",
                    revenue: "RM 30M ARR",
                    units: [
                      {
                        name: "Future Banking",
                        revenue: "RM 15M ARR",
                        services: [
                          "AI Financial Assistant",
                          "Voice Banking",
                          "Smart Contracts",
                          "Biometric Security",
                          "Open Banking Platform",
                          "Blockchain Solutions",
                          "IoT Payments",
                          "Digital Identity",
                          "Quantum Security",
                          "Future Payment Systems"
                        ]
                      },
                      {
                        name: "Research & Development",
                        revenue: "RM 10M ARR",
                        services: [
                          "FinTech Research",
                          "Islamic Finance Innovation",
                          "Banking Technology",
                          "Security Research",
                          "Payment Innovation",
                          "User Experience",
                          "Data Analytics",
                          "Market Research",
                          "Technology Trials",
                          "Product Innovation"
                        ]
                      },
                      {
                        name: "Partner Ecosystem",
                        revenue: "RM 5M ARR",
                        services: [
                          "Partner Integration",
                          "API Marketplace",
                          "Developer Platform",
                          "Partnership Programs",
                          "Ecosystem Analytics",
                          "Partner Support",
                          "Documentation",
                          "Testing Environment",
                          "Compliance Tools",
                          "Community Building"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                name: "NexzGen Lifestyle Sdn Bhd",
                revenue: "RM 120M ARR",
                stage: "Lifestyle Innovation Leader",
                divisions: [
                  {
                    name: "The Zone (F&B Division)",
                    revenue: "RM 60M ARR",
                    units: [
                      {
                        name: "Corporate F&B",
                        revenue: "RM 30M ARR",
                        services: [
                          "Smart Corporate Cafeterias",
                          "Coffee Corners & Lounges",
                          "Food Courts Management",
                          "Executive Dining",
                          "Event Catering Services",
                          "Smart Vending Solutions",
                          "Office Pantry Services",
                          "Food Delivery Platform",
                          "Nutrition Planning",
                          "Digital Payment Integration"
                        ]
                      },
                      {
                        name: "Supply Chain",
                        revenue: "RM 20M ARR",
                        services: [
                          "Food Security Management",
                          "Supplier Network",
                          "Quality Assurance",
                          "Inventory Management",
                          "Smart Logistics",
                          "Cold Chain Solutions",
                          "Sustainable Sourcing",
                          "Vendor Management",
                          "Cost Optimization",
                          "Supply Analytics"
                        ]
                      },
                      {
                        name: "Food Innovation",
                        revenue: "RM 10M ARR",
                        services: [
                          "Menu Engineering",
                          "Nutritional Science",
                          "Sustainable Food Tech",
                          "Smart Kitchen Systems",
                          "Food Safety Innovation",
                          "Culinary R&D",
                          "Dietary Solutions",
                          "Food Analytics",
                          "Waste Reduction",
                          "Future Food Research"
                        ]
                      }
                    ]
                  },
                  {
                    name: "NexzGen Merch",
                    revenue: "RM 40M ARR",
                    units: [
                      {
                        name: "Corporate Merchandise",
                        revenue: "RM 20M ARR",
                        services: [
                          "Corporate Apparel Design",
                          "Premium Brand Merchandise",
                          "Event Merchandise",
                          "Custom Products",
                          "Anniversary Collections",
                          "Recognition Awards",
                          "Corporate Gifts",
                          "Seasonal Collections",
                          "Limited Editions",
                          "Personalization Services"
                        ]
                      },
                      {
                        name: "Manufacturing & Supply",
                        revenue: "RM 12M ARR",
                        services: [
                          "Production Management",
                          "Quality Control Systems",
                          "Supply Chain Operations",
                          "Inventory Solutions",
                          "Distribution Network",
                          "Sustainable Production",
                          "Material Sourcing",
                          "Manufacturing Innovation",
                          "Process Automation",
                          "Logistics Management"
                        ]
                      },
                      {
                        name: "Business Solutions",
                        revenue: "RM 8M ARR",
                        services: [
                          "Corporate Programs",
                          "Onboarding Kits",
                          "Brand Solutions",
                          "Event Packages",
                          "Bulk Orders",
                          "Custom Design Services",
                          "Digital Catalogs",
                          "Online Ordering",
                          "Analytics Platform",
                          "Client Management"
                        ]
                      }
                    ]
                  },
                  {
                    name: "Experience Division",
                    revenue: "RM 20M ARR",
                    units: [
                      {
                        name: "Workplace Experience",
                        revenue: "RM 10M ARR",
                        services: [
                          "Office Environment Design",
                          "Experience Centers",
                          "Innovation Spaces",
                          "Collaboration Zones",
                          "Wellness Areas",
                          "Digital Workplace",
                          "Smart Office Solutions",
                          "Event Spaces",
                          "Community Areas",
                          "Experience Management"
                        ]
                      },
                      {
                        name: "Brand Experience",
                        revenue: "RM 6M ARR",
                        services: [
                          "Brand Activations",
                          "Pop-up Experiences",
                          "Interactive Displays",
                          "Digital Engagement",
                          "Experience Design",
                          "Brand Storytelling",
                          "Customer Journey",
                          "Experience Analytics",
                          "Community Building",
                          "Engagement Programs"
                        ]
                      },
                      {
                        name: "Innovation Lab",
                        revenue: "RM 4M ARR",
                        services: [
                          "Experience Research",
                          "Future Workspace",
                          "Innovation Projects",
                          "User Testing",
                          "Prototype Development",
                          "Technology Integration",
                          "Sustainability Solutions",
                          "Smart Systems",
                          "Data Analytics",
                          "Experience Innovation"
                        ]
                      }
                    ]
                  }
                ]
              },
            {
              name: "NexzGen Quantum Pte Ltd",
              revenue: "RM 2B ARR",
              stage: "Quantum Technology Leader",
              divisions: [
                {
                  name: "Quantum Computing",
                  revenue: "RM 1B ARR",
                  units: [
                    {
                      name: "Quantum Systems",
                      revenue: "RM 500M ARR",
                      services: [
                        "Quantum Processors",
                        "Quantum Cloud Services",
                        "Quantum Software Development",
                        "Error Correction Systems",
                        "Quantum Algorithms"
                      ]
                    },
                    {
                      name: "Quantum Applications",
                      revenue: "RM 300M ARR",
                      services: [
                        "Financial Modeling",
                        "Drug Discovery",
                        "Climate Simulation",
                        "Materials Science",
                        "Optimization Problems"
                      ]
                    },
                    {
                      name: "Quantum Research",
                      revenue: "RM 200M ARR",
                      services: [
                        "Quantum Research Labs",
                        "Academic Partnerships",
                        "Innovation Programs",
                        "Quantum Education",
                        "Research Publications"
                      ]
                    }
                  ]
                },
                {
                  name: "Quantum Security",
                  revenue: "RM 600M ARR",
                  units: [
                    {
                      name: "Quantum Cryptography",
                      revenue: "RM 300M ARR",
                      services: [
                        "Post-Quantum Cryptography",
                        "Quantum Key Distribution",
                        "Quantum Random Numbers",
                        "Secure Communications",
                        "Enterprise Security"
                      ]
                    },
                    {
                      name: "Quantum Networks",
                      revenue: "RM 200M ARR",
                      services: [
                        "Quantum Internet",
                        "Quantum Repeaters",
                        "Entanglement Distribution",
                        "Network Protocols",
                        "Quantum Memory"
                      ]
                    },
                    {
                      name: "Security Services",
                      revenue: "RM 100M ARR",
                      services: [
                        "Consulting Services",
                        "Implementation Support",
                        "Security Assessment",
                        "Training Programs",
                        "Managed Security"
                      ]
                    }
                  ]
                },
                {
                  name: "Quantum Innovation",
                  revenue: "RM 400M ARR",
                  units: [
                    {
                      name: "Quantum AI",
                      revenue: "RM 200M ARR",
                      services: [
                        "Quantum Machine Learning",
                        "Quantum Neural Networks",
                        "Hybrid Algorithms",
                        "AI Optimization",
                        "Pattern Recognition"
                      ]
                    },
                    {
                      name: "Quantum Solutions",
                      revenue: "RM 150M ARR",
                      services: [
                        "Industry Solutions",
                        "Custom Applications",
                        "Integration Services",
                        "Performance Analysis",
                        "Solution Architecture"
                      ]
                    },
                    {
                      name: "Future Technologies",
                      revenue: "RM 50M ARR",
                      services: [
                        "Emerging Tech Research",
                        "Prototype Development",
                        "Technology Transfer",
                        "Innovation Labs",
                        "Future Applications"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "NexzGen Neural Technologies Pte Ltd",
              revenue: "RM 1.5B ARR",
              stage: "Neural Interface Pioneer",
              divisions: [
                {
                  name: "Neural Computing",
                  revenue: "RM 700M ARR",
                  units: [
                    {
                      name: "Brain-Computer Interfaces",
                      revenue: "RM 300M ARR",
                      services: [
                        "Neural Implants",
                        "Non-invasive Interfaces",
                        "Neural Control Systems",
                        "Cognitive Enhancement",
                        "Medical Applications"
                      ]
                    },
                    {
                      name: "Neural Software",
                      revenue: "RM 250M ARR",
                      services: [
                        "Neural Operating System",
                        "Brain-AI Integration",
                        "Neural Applications",
                        "Control Systems",
                        "User Experience"
                      ]
                    },
                    {
                      name: "Research & Development",
                      revenue: "RM 150M ARR",
                      services: [
                        "Neural Science Research",
                        "Interface Development",
                        "Clinical Trials",
                        "Safety Studies",
                        "Ethical Guidelines"
                      ]
                    }
                  ]
                },
                {
                  name: "Neural Applications",
                  revenue: "RM 500M ARR",
                  units: [
                    {
                      name: "Medical Solutions",
                      revenue: "RM 250M ARR",
                      services: [
                        "Neural Rehabilitation",
                        "Cognitive Therapy",
                        "Mental Health",
                        "Disability Support",
                        "Medical Monitoring"
                      ]
                    },
                    {
                      name: "Consumer Applications",
                      revenue: "RM 150M ARR",
                      services: [
                        "Neural Gaming",
                        "Productivity Tools",
                        "Learning Enhancement",
                        "Entertainment Systems",
                        "Personal Computing"
                      ]
                    },
                    {
                      name: "Enterprise Solutions",
                      revenue: "RM 100M ARR",
                      services: [
                        "Industrial Control",
                        "Training Systems",
                        "Security Applications",
                        "Workforce Enhancement",
                        "Professional Tools"
                      ]
                    }
                  ]
                },
                {
                  name: "Neural Innovation",
                  revenue: "RM 300M ARR",
                  units: [
                    {
                      name: "Future Interfaces",
                      revenue: "RM 150M ARR",
                      services: [
                        "Next-Gen BCI",
                        "Advanced Neural Nets",
                        "Cognitive Computing",
                        "Sensory Enhancement",
                        "Neural Feedback"
                      ]
                    },
                    {
                      name: "Integration Services",
                      revenue: "RM 100M ARR",
                      services: [
                        "System Integration",
                        "Custom Solutions",
                        "Platform Development",
                        "API Services",
                        "Technical Support"
                      ]
                    },
                    {
                      name: "Research Lab",
                      revenue: "RM 50M ARR",
                      services: [
                        "Future Research",
                        "Ethics & Safety",
                        "Standards Development",
                        "Collaboration Programs",
                        "Innovation Projects"
                      ]
                    }
                  ]
                }
              ]
            },
            {
                name: "NexzGen Space Technologies Sdn Bhd",
                revenue: "RM 1.8B ARR",
                stage: "Space Innovation Leader",
                divisions: [
                  {
                    name: "Space Computing",
                    revenue: "RM 800M ARR",
                    units: [
                      {
                        name: "Orbital Computing",
                        revenue: "RM 400M ARR",
                        services: [
                          "Space Data Centers",
                          "Orbital Cloud Services",
                          "Satellite Processing",
                          "Space-Based AI",
                          "Quantum Space Computing"
                        ]
                      },
                      {
                        name: "Space Communications",
                        revenue: "RM 250M ARR",
                        services: [
                          "Satellite Networks",
                          "Space Internet",
                          "Deep Space Communication",
                          "Ground Station Services",
                          "Inter-Satellite Links"
                        ]
                      },
                      {
                        name: "Space Software",
                        revenue: "RM 150M ARR",
                        services: [
                          "Mission Control Systems",
                          "Satellite Management",
                          "Space Analytics",
                          "Navigation Software",
                          "Space Safety Systems"
                        ]
                      }
                    ]
                  },
                  {
                    name: "Earth Observation",
                    revenue: "RM 600M ARR",
                    units: [
                      {
                        name: "Climate Solutions",
                        revenue: "RM 250M ARR",
                        services: [
                          "Climate Monitoring",
                          "Weather Prediction",
                          "Environmental Analysis",
                          "Disaster Management",
                          "Resource Management"
                        ]
                      },
                      {
                        name: "Earth Analytics",
                        revenue: "RM 200M ARR",
                        services: [
                          "Geospatial Intelligence",
                          "Agricultural Monitoring",
                          "Urban Planning",
                          "Maritime Surveillance",
                          "Forest Management"
                        ]
                      },
                      {
                        name: "Data Services",
                        revenue: "RM 150M ARR",
                        services: [
                          "Real-Time Analytics",
                          "Historical Data",
                          "Predictive Models",
                          "Custom Reports",
                          "API Services"
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                name: "NexzGen BioTech Sdn Bhd",
                revenue: "RM 1.2B ARR",
                stage: "BioTech Innovation Leader",
                divisions: [
                  {
                    name: "Digital Health",
                    revenue: "RM 500M ARR",
                    units: [
                      {
                        name: "Health Analytics",
                        revenue: "RM 200M ARR",
                        services: [
                          "AI Diagnostics",
                          "Predictive Health",
                          "Genomic Analysis",
                          "Clinical Analytics",
                          "Population Health"
                        ]
                      },
                      {
                        name: "Digital Therapeutics",
                        revenue: "RM 200M ARR",
                        services: [
                          "Digital Medicine",
                          "Remote Monitoring",
                          "Personalized Treatment",
                          "Behavioral Health",
                          "Clinical Trials"
                        ]
                      },
                      {
                        name: "Health Platforms",
                        revenue: "RM 100M ARR",
                        services: [
                          "Healthcare APIs",
                          "Medical Data Platform",
                          "Provider Solutions",
                          "Patient Engagement",
                          "Clinical Decision Support"
                        ]
                      }
                    ]
                  },
                  {
                    name: "BioInformatics",
                    revenue: "RM 400M ARR",
                    units: [
                      {
                        name: "Genomic Computing",
                        revenue: "RM 200M ARR",
                        services: [
                          "Genome Sequencing",
                          "Genetic Analysis",
                          "Mutation Studies",
                          "Population Genetics",
                          "Precision Medicine"
                        ]
                      },
                      {
                        name: "Research Platforms",
                        revenue: "RM 120M ARR",
                        services: [
                          "Research Tools",
                          "Data Analysis",
                          "Collaboration Platform",
                          "Lab Automation",
                          "Research Database"
                        ]
                      },
                      {
                        name: "BioTech Solutions",
                        revenue: "RM 80M ARR",
                        services: [
                          "Drug Discovery",
                          "Clinical Research",
                          "Biomarker Analysis",
                          "Pathway Analysis",
                          "Systems Biology"
                        ]
                      }
                    ]
                  }
                ]
              }
    ]   
  },
  '2050': {
    structure: "NexzGen Berhad (KLSE:NXGN, SGX:NXGN , NASDAQ:NXGN)",
    valuation: "RM 8B",
    funding: "Multiple Exchange Listed",
    status: "Global Tech Corporation",
    team: {
      total: 5000,
      breakdown: {
        leadership: {
          members: [
            { name: "Next Generation Leadership", role: "Global Leadership Team" }
          ]
        },
        divisions: {
          members: Array(4800).fill(null).map((_, i) => ({
            name: "Vacant",
            role: [
              "Global Technology",
              "Innovation & Research",
              "Regional Operations",
              "Business Development",
              "Product Development",
              "Corporate Services"
            ][i % 6]
          }))
        }
      }
    },
    financials: {
      revenue: {
        target: "RM 4B",
        breakdown: {
          product: "RM 2.5B",
          consulting: "RM 1B",
          animation: "RM 500M"
        }
      },
      burnRate: "RM 100M/month",
      runway: "60 months",
      status: "Sustainable Growth"
    },
    milestones: [
      "Fortune Global 500 Entry",
      "20M Global Users Achievement",
      "Carbon Neutral Operations",
      "Global Tech Standard Setting",
      "Advanced Research Breakthroughs",
      "Full Global Market Presence",
      "Next Generation Company Vision"
    ],
    ventures: {
      CareerRPG: {
        status: "Global Industry Standard",
        users: "20M",
        revenue: "RM 2B ARR"
      },
      ServisLah: {
        status: "Global Enterprise Leader",
        users: "2M businesses",
        revenue: "RM 1.5B ARR"
      },
      ARespiratory: {
        status: "Global Healthcare Standard",
        users: "500K institutions",
        revenue: "RM 500M ARR"
      }
    },// 2050
    equity: {
      founders: "30%",
      investors: "60%",
      esop: "10%",
      details: "Public Listed"
    },
    subsidiaries: [
      {
        name: "NexzGen Global Technologies",
        revenue: "RM 3B ARR",
        stage: "Fortune 500",
        divisions: [
          {
            name: "Global Enterprise",
            revenue: "RM 1.5B ARR",
            units: [
              {
                name: "Cloud & Digital",
                revenue: "RM 1B ARR",
                services: ["Global Cloud Infrastructure", "Enterprise Solutions", "Digital Platforms"]
              },
              {
                name: "Innovation Technologies",
                revenue: "RM 500M ARR",
                services: ["Advanced AI", "Quantum Solutions", "Future Tech"]
              }
            ]
          },
          {
            name: "Future Technologies",
            revenue: "RM 1.5B ARR",
            units: [
              {
                name: "Research & Innovation",
                revenue: "RM 800M ARR",
                services: ["Quantum Computing", "Space Tech", "Advanced Materials"]
              },
              {
                name: "Emerging Tech",
                revenue: "RM 700M ARR",
                services: ["Neural Interfaces", "Robotics", "Biotech"]
              }
            ]
          }
        ]
      },
      {
        name: "NexzGen Entertainment Universe",
        revenue: "RM 2B ARR",
        stage: "Global Leader",
        divisions: [
          {
            name: "Media & Content",
            revenue: "RM 1.2B ARR",
            units: [
              {
                name: "Global Studios",
                revenue: "RM 700M ARR",
                services: ["Animation Films", "Original Content", "Global Distribution"]
              },
              {
                name: "Digital Entertainment",
                revenue: "RM 500M ARR",
                services: ["Streaming Networks", "Interactive Media", "Content Platforms"]
              }
            ]
          },
          {
            name: "Interactive Worlds",
            revenue: "RM 800M ARR",
            units: [
              {
                name: "Gaming Division",
                revenue: "RM 500M ARR",
                services: ["AAA Games", "Mobile Gaming", "Cloud Gaming"]
              },
              {
                name: "Metaverse",
                revenue: "RM 300M ARR",
                services: ["Virtual Worlds", "Digital Economy", "Creator Tools"]
              }
            ]
          }
        ]
      },
      {
        name: "NexzGen Materials Science Pte Ltd",
        revenue: "RM 3B ARR",
        stage: "Advanced Materials Pioneer",
        divisions: [
          {
            name: "Quantum Materials",
            revenue: "RM 1.2B ARR",
            units: [
              {
                name: "Advanced Computing Materials",
                revenue: "RM 500M ARR",
                services: [
                  "Quantum Computing Materials",
                  "Superconducting Materials",
                  "Neural Computing Substrates",
                  "Advanced Semiconductors",
                  "Photonic Materials"
                ]
              },
              {
                name: "Smart Materials",
                revenue: "RM 400M ARR",
                services: [
                  "Self-Healing Materials",
                  "Programmable Matter",
                  "Shape-Memory Materials",
                  "Responsive Materials",
                  "Adaptive Structures"
                ]
              },
              {
                name: "Nano Materials",
                revenue: "RM 300M ARR",
                services: [
                  "Carbon Nanotubes",
                  "Quantum Dots",
                  "2D Materials",
                  "Metamaterials",
                  "Molecular Engineering"
                ]
              }
            ]
          },
          {
            name: "Sustainable Materials",
            revenue: "RM 1B ARR",
            units: [
              {
                name: "Bio Materials",
                revenue: "RM 400M ARR",
                services: [
                  "Biodegradable Electronics",
                  "Sustainable Composites",
                  "Bio-Based Materials",
                  "Green Chemistry",
                  "Circular Materials"
                ]
              },
              {
                name: "Energy Materials",
                revenue: "RM 300M ARR",
                services: [
                  "Battery Materials",
                  "Solar Materials",
                  "Thermoelectric Materials",
                  "Energy Storage",
                  "Catalyst Materials"
                ]
              },
              {
                name: "Construction Materials",
                revenue: "RM 300M ARR",
                services: [
                  "Smart Buildings",
                  "Carbon-Negative Materials",
                  "Self-Repairing Infrastructure",
                  "Advanced Composites",
                  "Sustainable Concrete"
                ]
              }
            ]
          },
          {
            name: "Materials Innovation",
            revenue: "RM 800M ARR",
            units: [
              {
                name: "Research Labs",
                revenue: "RM 400M ARR",
                services: [
                  "Materials Discovery",
                  "Computational Design",
                  "Advanced Characterization",
                  "Process Innovation",
                  "Materials Testing"
                ]
              },
              {
                name: "Applications Development",
                revenue: "RM 300M ARR",
                services: [
                  "Industry Solutions",
                  "Custom Materials",
                  "Application Engineering",
                  "Performance Optimization",
                  "Integration Services"
                ]
              },
              {
                name: "Future Materials",
                revenue: "RM 100M ARR",
                services: [
                  "Emerging Materials",
                  "Next-Gen Applications",
                  "Materials Systems",
                  "Sustainability Research",
                  "Materials Education"
                ]
              }
            ]
          }
        ]
      },
      {
        name: "NexzGen Fusion Energy Corporation",
        revenue: "RM 4B ARR",
        stage: "Clean Energy Pioneer",
        divisions: [
          {
            name: "Fusion Technology",
            revenue: "RM 2B ARR",
            units: [
              {
                name: "Fusion Systems",
                revenue: "RM 1B ARR",
                services: [
                  "Fusion Reactors",
                  "Plasma Containment",
                  "Power Generation",
                  "Control Systems",
                  "Safety Systems"
                ]
              },
              {
                name: "Energy Infrastructure",
                revenue: "RM 600M ARR",
                services: [
                  "Grid Integration",
                  "Power Distribution",
                  "Energy Storage",
                  "Smart Grid Systems",
                  "Load Management"
                ]
              },
              {
                name: "Support Systems",
                revenue: "RM 400M ARR",
                services: [
                  "Cooling Systems",
                  "Maintenance Systems",
                  "Monitoring Solutions",
                  "Safety Protocols",
                  "Emergency Systems"
                ]
              }
            ]
          },
          {
            name: "Energy Solutions",
            revenue: "RM 1.2B ARR",
            units: [
              {
                name: "Commercial Energy",
                revenue: "RM 500M ARR",
                services: [
                  "Industrial Power",
                  "Commercial Solutions",
                  "Energy Management",
                  "Power Services",
                  "Energy Consulting"
                ]
              },
              {
                name: "Grid Systems",
                revenue: "RM 400M ARR",
                services: [
                  "Grid Modernization",
                  "Smart Distribution",
                  "Network Management",
                  "Grid Security",
                  "Load Balancing"
                ]
              },
              {
                name: "Energy Services",
                revenue: "RM 300M ARR",
                services: [
                  "Energy Analytics",
                  "Optimization Services",
                  "Maintenance Programs",
                  "Training Services",
                  "Technical Support"
                ]
              }
            ]
          },
          {
            name: "Energy Innovation",
            revenue: "RM 800M ARR",
            units: [
              {
                name: "Research & Development",
                revenue: "RM 400M ARR",
                services: [
                  "Fusion Research",
                  "Technology Development",
                  "Materials Research",
                  "Process Innovation",
                  "Safety Research"
                ]
              },
              {
                name: "Future Energy",
                revenue: "RM 300M ARR",
                services: [
                  "Next-Gen Fusion",
                  "Advanced Systems",
                  "Energy Integration",
                  "Sustainability Solutions",
                  "Energy Storage"
                ]
              },
              {
                name: "Global Programs",
                revenue: "RM 100M ARR",
                services: [
                  "International Projects",
                  "Research Collaboration",
                  "Technology Transfer",
                  "Training Programs",
                  "Global Partnerships"
                ]
              }
            ]
          }
        ]
      },
      {
        name: "NexzGen Robotics Corporation",
        revenue: "RM 3.5B ARR",
        stage: "Robotics Innovation Leader",
        divisions: [
          {
            name: "Advanced Robotics",
            revenue: "RM 1.5B ARR",
            units: [
              {
                name: "Humanoid Systems",
                revenue: "RM 600M ARR",
                services: [
                  "Humanoid Robots",
                  "Social Robotics",
                  "Human-Robot Interaction",
                  "Cognitive Systems",
                  "Emotional AI"
                ]
              },
              {
                name: "Industrial Robotics",
                revenue: "RM 500M ARR",
                services: [
                  "Manufacturing Robots",
                  "Warehouse Automation",
                  "Process Robotics",
                  "Collaborative Robots",
                  "Custom Solutions"
                ]
              },
              {
                name: "Service Robotics",
                revenue: "RM 400M ARR",
                services: [
                  "Healthcare Robots",
                  "Personal Assistance",
                  "Education Robots",
                  "Hospitality Robots",
                  "Retail Automation"
                ]
              }
            ]
          },
          {
            name: "Robotics AI",
            revenue: "RM 1.2B ARR",
            units: [
              {
                name: "AI Systems",
                revenue: "RM 500M ARR",
                services: [
                  "Robot Intelligence",
                  "Machine Learning",
                  "Computer Vision",
                  "Natural Language",
                  "Decision Systems"
                ]
              },
              {
                name: "Control Systems",
                revenue: "RM 400M ARR",
                services: [
                  "Motion Control",
                  "Navigation Systems",
                  "Task Planning",
                  "Safety Controls",
                  "Coordination Systems"
                ]
              },
              {
                name: "Integration",
                revenue: "RM 300M ARR",
                services: [
                  "System Integration",
                  "Platform Development",
                  "API Services",
                  "Cloud Robotics",
                  "Edge Computing"
                ]
              }
            ]
          }
        ]
      },
      {
        name: "NexzGen Climate Technologies",
        revenue: "RM 2.5B ARR",
        stage: "Climate Solutions Leader",
        divisions: [
          {
            name: "Carbon Technologies",
            revenue: "RM 1.2B ARR",
            units: [
              {
                name: "Carbon Capture",
                revenue: "RM 500M ARR",
                services: [
                  "Direct Air Capture",
                  "Industrial Capture",
                  "Carbon Storage",
                  "Utilization Systems",
                  "Monitoring Solutions"
                ]
              },
              {
                name: "Climate Solutions",
                revenue: "RM 400M ARR",
                services: [
                  "Climate Engineering",
                  "Weather Modification",
                  "Atmospheric Management",
                  "Environmental Systems",
                  "Climate Monitoring"
                ]
              },
              {
                name: "Ecosystem Services",
                revenue: "RM 300M ARR",
                services: [
                  "Biodiversity Protection",
                  "Ecosystem Restoration",
                  "Natural Solutions",
                  "Conservation Tech",
                  "Monitoring Systems"
                ]
              }
            ]
          },
          {
            name: "Sustainable Systems",
            revenue: "RM 800M ARR",
            units: [
              {
                name: "Green Technology",
                revenue: "RM 400M ARR",
                services: [
                  "Clean Energy Systems",
                  "Waste Management",
                  "Water Technologies",
                  "Circular Economy",
                  "Sustainable Transport"
                ]
              },
              {
                name: "Environmental Solutions",
                revenue: "RM 300M ARR",
                services: [
                  "Air Quality Systems",
                  "Water Treatment",
                  "Soil Remediation",
                  "Pollution Control",
                  "Waste Recycling"
                ]
              },
              {
                name: "Sustainability Services",
                revenue: "RM 100M ARR",
                services: [
                  "Sustainability Consulting",
                  "Environmental Analytics",
                  "Impact Assessment",
                  "Reporting Systems",
                  "Training Programs"
                ]
              }
            ]
          }
        ]
      },
    ]
  }
};

export default roadmapData;

