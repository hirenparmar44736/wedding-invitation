export interface EventItem {
  id: string;
  name: {
    en: string;
    gu: string;
  };
  period: {
    en: string;
    gu: string;
  };
  timeDisplay?: {
    en: string;
    gu: string;
  };
  exactStartTime?: string; // ISO or '09:00' for later updates
  exactEndTime?: string;
  description: {
    en: string;
    gu: string;
  };
  iconName: string;
}

export interface DaySchedule {
  date: string;
  dayNumber: number;
  formattedDate: {
    en: string;
    gu: string;
  };
  events: EventItem[];
}

export interface WeddingConfig {
  couple: {
    groom: {
      name: string;
      fullName: string;
      parents: {
        father: string;
        mother: string;
      };
    };
    bride: {
      name: string;
      fullName: string;
      parents: {
        father: string;
        mother: string;
      };
    };
    mainDisplay: string;
    monogram: string;
  };
  dates: {
    primaryDatesText: {
      en: string;
      gu: string;
    };
    day1: string;
    day2: string;
    countdownTarget: string; // ISO format with IST offset
  };
  location: {
    venueName: {
      en: string;
      gu: string;
    };
    area: {
      en: string;
      gu: string;
    };
    cityState: {
      en: string;
      gu: string;
    };
    country: {
      en: string;
      gu: string;
    };
    googleMapsUrl: string;
  };
  schedule: DaySchedule[];
  dressCode: {
    women: {
      title: { en: string; gu: string };
      attire: { en: string; gu: string };
      note: { en: string; gu: string };
    };
    men: {
      title: { en: string; gu: string };
      attire: { en: string; gu: string };
      note: { en: string; gu: string };
    };
    colorNote: {
      en: string;
      gu: string;
    };
  };
  scratchReveal: {
    hiddenMessage: {
      en: string;
      gu: string;
    };
    subtitle: {
      en: string;
      gu: string;
    };
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      name: 'Hiren',
      fullName: 'Hiren Parmar',
      parents: {
        father: 'Bharat Kumar Parmar',
        mother: 'Neeta Ben Parmar',
      },
    },
    bride: {
      name: 'Ashlesha',
      fullName: 'Ashlesha Modhvania',
      parents: {
        father: 'Ashwin Modhwania',
        mother: 'Tina Modhwania',
      },
    },
    mainDisplay: 'Hiren ♥ Ashlesha',
    monogram: 'H & A',
  },
  dates: {
    primaryDatesText: {
      en: '24 & 25 February 2027',
      gu: '૨૪ અને ૨૫ ફેબ્રુઆરી ૨૦૨૭',
    },
    day1: '2027-02-24',
    day2: '2027-02-25',
    // Midnight 24 February 2027 IST (UTC+05:30)
    countdownTarget: '2027-02-24T00:00:00+05:30',
  },
  location: {
    venueName: {
      en: 'Family Residence',
      gu: 'નિવાસ સ્થાન (પાર્મર નિવાસ)',
    },
    area: {
      en: 'Umrala',
      gu: 'ઉમરાળા',
    },
    cityState: {
      en: 'Gujarat, India',
      gu: 'ગુજરાત, ભારત',
    },
    country: {
      en: 'India',
      gu: 'ભારત',
    },
    googleMapsUrl: 'https://maps.app.goo.gl/DRkNPQi3CRdGRTUr5',
  },
  schedule: [
    {
      date: '2027-02-24',
      dayNumber: 1,
      formattedDate: {
        en: 'Wednesday, 24 February 2027',
        gu: 'બુધવાર, ૨૪ ફેબ્રુઆરી ૨૦૨૭',
      },
      events: [
        {
          id: 'ganesh-pujan',
          name: {
            en: 'Ganesh Pujan',
            gu: 'ગણેશ પૂજન',
          },
          period: {
            en: 'Morning',
            gu: 'સવારે',
          },
          timeDisplay: {
            en: 'Morning',
            gu: 'સવારના શુભ સમયે',
          },
          description: {
            en: 'Invoking the divine blessings of Lord Ganesha for auspicious beginnings and eternal harmony.',
            gu: 'શ્રી ગણેશજીની આરાધના કરી સર્વ વિઘ્નોના નાશ અને શુભ કાર્યોની મંગલ શરૂઆત.',
          },
          iconName: 'Sparkles',
        },
        {
          id: 'jamanvar',
          name: {
            en: 'Jamanvar',
            gu: 'જમણવાર (મંગલ ભોજન)',
          },
          period: {
            en: 'Afternoon',
            gu: 'બપોરે',
          },
          timeDisplay: {
            en: 'Afternoon',
            gu: 'બપોરે',
          },
          description: {
            en: 'A joyous traditional feast shared with beloved family and guests.',
            gu: 'પરંપરાગત સ્નેહમિલન અને સ્વાદિષ્ટ ભોજન સમારોહ.',
          },
          iconName: 'Utensils',
        },
        {
          id: 'haldi',
          name: {
            en: 'Haldi Ceremony',
            gu: 'પીઠી / હળદર વિધિ',
          },
          period: {
            en: 'Evening',
            gu: 'સાંજે',
          },
          timeDisplay: {
            en: 'Evening',
            gu: 'સાંજે',
          },
          description: {
            en: 'Anointing the couple with golden turmeric, radiant blessings, laughter and pure love.',
            gu: 'મંગલ હળદર અને કુમકુમથી સુવર્ણ સ્નેહ આશીર્વાદ અર્પણ કરતી હર્ષોલ્લાસ વિધિ.',
          },
          iconName: 'Sun',
        },
        {
          id: 'garba',
          name: {
            en: 'Raas Garba & Sangeet',
            gu: 'રાસ ગરબા અને સંગીત સંધ્યા',
          },
          period: {
            en: 'Night',
            gu: 'રાત્રે',
          },
          timeDisplay: {
            en: 'Night',
            gu: 'રાત્રે',
          },
          description: {
            en: 'An enchanting night of rhythmic Gujarati folklore, music, dandiya and vibrant celebration.',
            gu: 'ઢોલના તાલે પારંપરિક રાસ ગરબા અને આનંદોલ્લાસથી છલકાતી મનમોહક સંગીત રાત્રિ.',
          },
          iconName: 'Music',
        },
      ],
    },
    {
      date: '2027-02-25',
      dayNumber: 2,
      formattedDate: {
        en: 'Thursday, 25 February 2027',
        gu: 'ગુરુવાર, ૨૫ ફેબ્રુઆરી ૨૦૨૭',
      },
      events: [
        {
          id: 'shadi',
          name: {
            en: 'Shadi / Wedding Ceremony',
            gu: 'લગ્ન વિધિ (હસ્તમેળાપ)',
          },
          period: {
            en: 'Morning',
            gu: 'સવારે',
          },
          timeDisplay: {
            en: 'Morning',
            gu: 'સવારના માંગલિક મુહૂર્તે',
          },
          description: {
            en: 'The sacred Vedic union around the holy fire, solemn vows and blessings of eternity.',
            gu: 'સપ્તપદી અને પવિત્ર મંત્રોચ્ચાર સાથે પ્રભુતામાં પગલાં પાડવાની મંગલ વેળા.',
          },
          iconName: 'HeartHandshake',
        },
      ],
    },
  ],
  dressCode: {
    women: {
      title: {
        en: 'Women',
        gu: 'મહિલાઓ માટે',
      },
      attire: {
        en: 'Saree / Lehenga',
        gu: 'સાડી / ચણિયાચોળી (લેહેંગા)',
      },
      note: {
        en: 'Traditional Indian Elegance',
        gu: 'પરંપરાગત ભારતીય પરિધાન',
      },
    },
    men: {
      title: {
        en: 'Men',
        gu: 'પુરુષો માટે',
      },
      attire: {
        en: 'Kurta / Sherwani',
        gu: 'કુર્તા પાયજામા / શેરવાની',
      },
      note: {
        en: 'Classic Ethnic Attire',
        gu: 'પરંપરાગત એથનિક પહેરવેશ',
      },
    },
    colorNote: {
      en: 'No specific colour theme — come dressed in your celebratory festive finest!',
      gu: 'કોઈ ચોક્કસ કલર થીમ નથી — આપની પસંદગીના મનપસંદ ઉત્સવી પરિધાનમાં પધારો!',
    },
  },
  scratchReveal: {
    hiddenMessage: {
      en: 'Two hearts. One beautiful beginning.',
      gu: 'બે હૃદય. એક મંગલ શરૂઆત.',
    },
    subtitle: {
      en: 'We would be deeply honored by your presence and warm blessings.',
      gu: 'આપના સ્નેહભર્યા આશીર્વાદ અને પાવન ઉપસ્થિતિથી અમારા ઉત્સવને શોભાવશો.',
    },
  },
};
