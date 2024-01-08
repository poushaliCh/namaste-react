// const heading = React.createElement(
//   'h1',
//   { id: 'heading', xyz: 'abcd' },
//   'hellow world from React'
// );

//nested element create in react
/*
<div id="parent">
        <div id="child1">
            <h1>i am h1 heading</h1>
            <h2>i am h2 heading</h2>
        </div>
        <div id="child2">
            <h1>i am h3 heading</h1>
            <h2>i am h4 heading</h2>
        </div>
    </div>
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

// const parent = React.createElement('div', { id: 'parent' }, [
//   React.createElement('div', { id: 'child1' }, [
//     React.createElement('h1', {}, 'Hi i am h1 heading'),
//     React.createElement('h2', {}, 'Hi i am h2 heading'),
//   ]),
//   React.createElement('div', { id: 'child2' }, [
//     React.createElement('h1', {}, 'Hi i am h3 heading'),
//     React.createElement('h2', {}, 'Hi i am h4 heading'),
//   ]),
// ]);
//console.log(heading); //heading is just a react element, react element is actually a object
// const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(heading); //render method helps to take that object and put it into the dom.
// heading become HTML while it ending to dom using render method

// root.render(parent);

//now with JSX
// const hradingJSX = <h1 id="heading">Namaste React by JSX</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(hradingJSX);

//react functional component---

// const Title = () => {
//   return <h2>Title Component</h2>;
// };
// const elem = <span>span react element</span>;
// const TitleElement = <h2>{elem}hii am Recat Element</h2>;

// const num = 10000;
// const HeadingComponent = () => (
//   <div id="container">
//     <Title /> //component composition
//     {Title()}
//     <Title></Title>
//     {TitleElement}
//     <p>{num}</p>
//     <p>{100 + 200}</p>
//     <h1 className="heading">functional component</h1>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<HeadingComponent />);

// Food Ordering website

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: '#f0f0f0',
};

const resList = [
  {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
        info: {
          id: '752706',
          name: 'Tea Junction',
          cloudinaryImageId: 'bk2nz2tjjn4bui83dbx4',
          locality: 's c Mullik road',
          areaName: 'Jadavpur',
          costForTwo: '₹200 for two',
          cuisines: [
            'Beverages',
            'Snacks',
            'Desserts',
            'Burgers',
            'Cakes and Pastries',
          ],
          avgRating: 4.5,
          parentId: '4311',
          avgRatingString: '4.5',
          totalRatingsString: '100+',
          promoted: true,
          adTrackingId:
            'cid=10444220~p=3~eid=0000018c-e773-c132-00de-e5e5003b0353~srvts=1704690172210~80450',
          sla: {
            deliveryTime: 35,
            lastMileTravel: 6.4,
            serviceability: 'SERVICEABLE',
            slaString: '35 mins',
            lastMileTravelString: '6.4 km',
            iconType: 'ICON_TYPE_EMPTY',
          },
          availability: {
            nextCloseTime: '2024-01-15 00:00:00',
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: 'F',
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: '20% OFF',
            subHeader: 'UPTO ₹50',
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: 'BENEFITS',
              logo: 'v1634558776/swiggy_one/OneLogo_3x.png',
            },
            freedelMessage: 'FREE DELIVERY',
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
              maxDuration: '3000',
              mediaType: 'ADS_MEDIA_ENUM_IMAGE',
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: 'swiggy://menu?restaurant_id=752706&source=collection&query=Kachori',
          text: 'RESTAURANT_MENU',
          type: 'DEEPLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_Contextual',
      },
      relevance: {
        type: 'RELEVANCE_TYPE_ON_MENU_RETURN',
        sectionId: 'MENU_RETURN_FOOD',
      },
    },
  },
  {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
        info: {
          id: '670410',
          name: 'Panchforon Foods Pvt Ltd',
          cloudinaryImageId: '3a09279bbf5097a9c768fc9b54478798',
          locality: 'South Kolkata',
          areaName: 'Gariahat',
          costForTwo: '₹300 for two',
          cuisines: ['Bengali', 'Thalis'],
          avgRating: 4.3,
          parentId: '154253',
          avgRatingString: '4.3',
          totalRatingsString: '1K+',
          promoted: true,
          adTrackingId:
            'cid=10489581~p=4~eid=0000018c-e773-c132-00de-e5e6003b0457~srvts=1704690172210~80450',
          sla: {
            deliveryTime: 41,
            lastMileTravel: 5.5,
            serviceability: 'SERVICEABLE',
            slaString: '41 mins',
            lastMileTravelString: '5.5 km',
            iconType: 'ICON_TYPE_EMPTY',
          },
          availability: {
            nextCloseTime: '2024-01-08 23:45:00',
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: 'F',
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: '₹100 OFF',
            subHeader: 'ABOVE ₹249',
            discountTag: 'FLAT DEAL',
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: 'BENEFITS',
              logo: 'v1634558776/swiggy_one/OneLogo_3x.png',
            },
            freedelMessage: 'FREE DELIVERY',
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
              maxDuration: '3000',
              mediaType: 'ADS_MEDIA_ENUM_IMAGE',
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: 'swiggy://menu?restaurant_id=670410&source=collection&query=Kachori',
          text: 'RESTAURANT_MENU',
          type: 'DEEPLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_Contextual',
      },
      relevance: {
        type: 'RELEVANCE_TYPE_ON_MENU_RETURN',
        sectionId: 'MENU_RETURN_FOOD',
      },
    },
  },
  {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
        info: {
          id: '26497',
          name: 'Nepal Sweets Since 1891',
          cloudinaryImageId: '95ab8516f2df02f8d829e45de2c6891f',
          locality: 'Opposite Rameshwara Apartments',
          areaName: 'Bhawanipur',
          costForTwo: '₹150 for two',
          cuisines: ['Snacks', 'Desserts', 'Sweets', 'Chaat'],
          avgRating: 4.6,
          veg: true,
          parentId: '463674',
          avgRatingString: '4.6',
          totalRatingsString: '10K+',
          promoted: true,
          adTrackingId:
            'cid=10489146~p=5~eid=0000018c-e773-c132-00de-e5e7003b051c~srvts=1704690172210~80450',
          sla: {
            deliveryTime: 29,
            lastMileTravel: 5.5,
            serviceability: 'SERVICEABLE',
            slaString: '29 mins',
            lastMileTravelString: '5.5 km',
            iconType: 'ICON_TYPE_EMPTY',
          },
          availability: {
            nextCloseTime: '2024-01-08 21:00:00',
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: 'v1695133679/badges/Pure_Veg111.png',
                description: 'pureveg',
              },
            ],
          },
          isOpen: true,
          type: 'F',
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: 'pureveg',
                      imageId: 'v1695133679/badges/Pure_Veg111.png',
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: '10% OFF',
            subHeader: 'UPTO ₹40',
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: 'BENEFITS',
              logo: 'v1634558776/swiggy_one/OneLogo_3x.png',
            },
            freedelMessage: 'FREE DELIVERY',
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
              maxDuration: '3000',
              mediaType: 'ADS_MEDIA_ENUM_IMAGE',
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: 'swiggy://menu?restaurant_id=26497&source=collection&query=Kachori',
          text: 'RESTAURANT_MENU',
          type: 'DEEPLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_Contextual',
      },
      relevance: {
        type: 'RELEVANCE_TYPE_ON_MENU_RETURN',
        sectionId: 'MENU_RETURN_FOOD',
      },
    },
  },
  {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
        info: {
          id: '56227',
          name: 'Maharaj',
          cloudinaryImageId: 'hughr5sdejzugfxlr7ge',
          locality: 'Desapriya Park',
          areaName: 'Kalighat',
          costForTwo: '₹100 for two',
          cuisines: ['Snacks'],
          avgRating: 4.6,
          veg: true,
          parentId: '7753',
          avgRatingString: '4.6',
          totalRatingsString: '10K+',
          promoted: true,
          adTrackingId:
            'cid=10489768~p=7~eid=0000018c-e773-c132-00de-e5e9003b0747~srvts=1704690172210~80450',
          sla: {
            deliveryTime: 36,
            lastMileTravel: 6,
            serviceability: 'SERVICEABLE',
            slaString: '36 mins',
            lastMileTravelString: '6.0 km',
            iconType: 'ICON_TYPE_EMPTY',
          },
          availability: {
            nextCloseTime: '2024-01-08 12:30:00',
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: 'v1695133679/badges/Pure_Veg111.png',
                description: 'pureveg',
              },
            ],
          },
          isOpen: true,
          type: 'F',
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: 'pureveg',
                      imageId: 'v1695133679/badges/Pure_Veg111.png',
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: 'BENEFITS',
              logo: 'v1634558776/swiggy_one/OneLogo_3x.png',
            },
            freedelMessage: 'FREE DELIVERY',
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
              maxDuration: '3000',
              mediaType: 'ADS_MEDIA_ENUM_IMAGE',
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: 'swiggy://menu?restaurant_id=56227&source=collection&query=Kachori',
          text: 'RESTAURANT_MENU',
          type: 'DEEPLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_Contextual',
      },
      relevance: {
        type: 'RELEVANCE_TYPE_ON_MENU_RETURN',
        sectionId: 'MENU_RETURN_FOOD',
      },
    },
  },
  {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
        info: {
          id: '35171',
          name: 'Gokul Shree - Tit Bits',
          cloudinaryImageId: 'amdz4vikvt3uwgiwlhtq',
          locality: 'Chowringhee',
          areaName: 'Chowringhee',
          costForTwo: '₹500 for two',
          cuisines: ['North Indian', 'Chinese'],
          avgRating: 4.3,
          veg: true,
          parentId: '472755',
          avgRatingString: '4.3',
          totalRatingsString: '5K+',
          promoted: true,
          adTrackingId:
            'cid=10489256~p=8~eid=0000018c-e773-c132-00de-e5ea003b081e~srvts=1704690172210~80450',
          sla: {
            deliveryTime: 38,
            lastMileTravel: 6,
            serviceability: 'SERVICEABLE',
            slaString: '38 mins',
            lastMileTravelString: '6.0 km',
            iconType: 'ICON_TYPE_EMPTY',
          },
          availability: {
            nextCloseTime: '2024-01-08 22:00:00',
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: 'F',
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: '20% OFF',
            subHeader: 'UPTO ₹50',
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: 'BENEFITS',
              logo: 'v1634558776/swiggy_one/OneLogo_3x.png',
            },
            freedelMessage: 'FREE DELIVERY',
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
              maxDuration: '3000',
              mediaType: 'ADS_MEDIA_ENUM_IMAGE',
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: 'swiggy://menu?restaurant_id=35171&source=collection&query=Kachori',
          text: 'RESTAURANT_MENU',
          type: 'DEEPLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_Contextual',
      },
      relevance: {
        type: 'RELEVANCE_TYPE_ON_MENU_RETURN',
        sectionId: 'MENU_RETURN_FOOD',
      },
    },
  },
  {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
        info: {
          id: '130766',
          name: 'Sharma Snacks',
          cloudinaryImageId: 'cm6z8y6xplcp0uomhawm',
          locality: 'Ruby',
          areaName: 'Ruby Area',
          costForTwo: '₹100 for two',
          cuisines: ['Beverages', 'Chaat'],
          avgRating: 4.4,
          veg: true,
          parentId: '7719',
          avgRatingString: '4.4',
          totalRatingsString: '10K+',
          sla: {
            deliveryTime: 27,
            lastMileTravel: 2.2,
            serviceability: 'SERVICEABLE',
            slaString: '27 mins',
            lastMileTravelString: '2.2 km',
            iconType: 'ICON_TYPE_EMPTY',
          },
          availability: {
            nextCloseTime: '2024-01-08 22:00:00',
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: 'v1695133679/badges/Pure_Veg111.png',
                description: 'pureveg',
              },
            ],
          },
          isOpen: true,
          type: 'F',
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: 'v1695133679/badges/Pure_Veg111.png',
                      description: 'pureveg',
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: '30% OFF',
            subHeader: 'UPTO ₹75',
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: 'BENEFITS',
              logo: 'v1634558776/swiggy_one/OneLogo_3x.png',
            },
            freedelMessage: 'FREE DELIVERY',
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
              maxDuration: '3000',
              mediaType: 'ADS_MEDIA_ENUM_IMAGE',
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: 'swiggy://menu?restaurant_id=130766&source=collection&query=Kachori',
          text: 'RESTAURANT_MENU',
          type: 'DEEPLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_Contextual',
      },
      relevance: {
        type: 'RELEVANCE_TYPE_ON_MENU_RETURN',
        sectionId: 'MENU_RETURN_FOOD',
      },
    },
  },
  {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
        info: {
          id: '8235',
          name: 'Balaram Mullick & Radharaman Mullick Sweets',
          cloudinaryImageId: 'b5256624182a9b3484f3fd0bbe5c60d1',
          locality: 'Kasba',
          areaName: 'East Kolkata Township',
          costForTwo: '₹300 for two',
          cuisines: ['Sweets', 'Bakery'],
          avgRating: 4.7,
          veg: true,
          parentId: '6142',
          avgRatingString: '4.7',
          totalRatingsString: '10K+',
          sla: {
            deliveryTime: 24,
            lastMileTravel: 2.5,
            serviceability: 'SERVICEABLE',
            slaString: '24 mins',
            lastMileTravelString: '2.5 km',
            iconType: 'ICON_TYPE_EMPTY',
          },
          availability: {
            nextCloseTime: '2024-01-08 21:00:00',
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: 'v1695133679/badges/Pure_Veg111.png',
                description: 'pureveg',
              },
            ],
          },
          isOpen: true,
          type: 'F',
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: 'v1695133679/badges/Pure_Veg111.png',
                      description: 'pureveg',
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: 'BENEFITS',
              logo: 'v1634558776/swiggy_one/OneLogo_3x.png',
            },
            freedelMessage: 'FREE DELIVERY',
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
              maxDuration: '3000',
              mediaType: 'ADS_MEDIA_ENUM_IMAGE',
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: 'swiggy://menu?restaurant_id=8235&source=collection&query=Kachori',
          text: 'RESTAURANT_MENU',
          type: 'DEEPLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_Contextual',
      },
      relevance: {
        type: 'RELEVANCE_TYPE_ON_MENU_RETURN',
        sectionId: 'MENU_RETURN_FOOD',
      },
    },
  },
  {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
        info: {
          id: '439022',
          name: 'Hindusthan Sweets',
          cloudinaryImageId: '511796dc2fec129d2b1118b7171842d6',
          locality: 'Rajdanga Main Road',
          areaName: 'Ruby Area',
          costForTwo: '₹200 for two',
          cuisines: ['Bakery', 'Snacks', 'Sweets'],
          avgRating: 4.6,
          veg: true,
          parentId: '3371',
          avgRatingString: '4.6',
          totalRatingsString: '1K+',
          sla: {
            deliveryTime: 22,
            lastMileTravel: 2.6,
            serviceability: 'SERVICEABLE',
            slaString: '22 mins',
            lastMileTravelString: '2.6 km',
            iconType: 'ICON_TYPE_EMPTY',
          },
          availability: {
            nextCloseTime: '2024-01-08 21:00:00',
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: 'F',
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: '30% OFF',
            subHeader: 'UPTO ₹75',
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: 'BENEFITS',
              logo: 'v1634558776/swiggy_one/OneLogo_3x.png',
            },
            freedelMessage: 'FREE DELIVERY',
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
              maxDuration: '3000',
              mediaType: 'ADS_MEDIA_ENUM_IMAGE',
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: 'swiggy://menu?restaurant_id=439022&source=collection&query=Kachori',
          text: 'RESTAURANT_MENU',
          type: 'DEEPLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_Contextual',
      },
      relevance: {
        type: 'RELEVANCE_TYPE_ON_MENU_RETURN',
        sectionId: 'MENU_RETURN_FOOD',
      },
    },
  },
  {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
        info: {
          id: '761155',
          name: 'Haldiram Express',
          cloudinaryImageId: '9b9759b31f8361b9bca4b29d16c20b70',
          locality: 'Chowbhaga Road',
          areaName: 'Ruby Area',
          costForTwo: '₹300 for two',
          cuisines: [
            'North Indian',
            'South Indian',
            'Chinese',
            'Tandoor',
            'Snacks',
            'Biryani',
            'Chaat',
            'Fast Food',
          ],
          avgRating: 3.7,
          veg: true,
          parentId: '439788',
          avgRatingString: '3.7',
          totalRatingsString: '20+',
          sla: {
            deliveryTime: 27,
            lastMileTravel: 0.4,
            serviceability: 'SERVICEABLE',
            slaString: '27 mins',
            lastMileTravelString: '0.4 km',
            iconType: 'ICON_TYPE_EMPTY',
          },
          availability: {
            nextCloseTime: '2024-01-08 22:00:00',
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: 'F',
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: '50% OFF',
            subHeader: 'UPTO ₹100',
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: 'BENEFITS',
              logo: 'v1634558776/swiggy_one/OneLogo_3x.png',
            },
            freedelMessage: 'FREE DELIVERY',
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
              maxDuration: '3000',
              mediaType: 'ADS_MEDIA_ENUM_IMAGE',
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: 'swiggy://menu?restaurant_id=761155&source=collection&query=Kachori',
          text: 'RESTAURANT_MENU',
          type: 'DEEPLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_Contextual',
      },
      relevance: {
        type: 'RELEVANCE_TYPE_ON_MENU_RETURN',
        sectionId: 'MENU_RETURN_FOOD',
      },
    },
  },
  {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
        info: {
          id: '503990',
          name: 'Bahari Ahar ( Original )',
          cloudinaryImageId: 'plbjt5trccrr0vi8ugac',
          locality: 'Ruby Area',
          areaName: 'Rajdanga Main Road',
          costForTwo: '₹100 for two',
          cuisines: ['Bengali', 'North Indian', 'Chinese'],
          avgRating: 4.3,
          parentId: '301818',
          avgRatingString: '4.3',
          totalRatingsString: '100+',
          sla: {
            deliveryTime: 32,
            lastMileTravel: 2.5,
            serviceability: 'SERVICEABLE',
            slaString: '32 mins',
            lastMileTravelString: '2.5 km',
            iconType: 'ICON_TYPE_EMPTY',
          },
          availability: {
            nextCloseTime: '2024-01-08 14:50:00',
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: 'F',
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: '10% OFF',
            subHeader: 'UPTO ₹40',
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: 'BENEFITS',
              logo: 'v1634558776/swiggy_one/OneLogo_3x.png',
            },
            freedelMessage: 'FREE DELIVERY',
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
              maxDuration: '3000',
              mediaType: 'ADS_MEDIA_ENUM_IMAGE',
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: 'swiggy://menu?restaurant_id=503990&source=collection&query=Kachori',
          text: 'RESTAURANT_MENU',
          type: 'DEEPLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_Contextual',
      },
      relevance: {
        type: 'RELEVANCE_TYPE_ON_MENU_RETURN',
        sectionId: 'MENU_RETURN_FOOD',
      },
    },
  },
  {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
        info: {
          id: '313127',
          name: 'Sona Caterer',
          cloudinaryImageId: '02963e3fb5b51a3d2bd400cef3ec347c',
          locality: 'Kasba',
          areaName: 'Jadavpur',
          costForTwo: '₹200 for two',
          cuisines: ['Indian', 'Desserts'],
          avgRating: 3.7,
          parentId: '190863',
          avgRatingString: '3.7',
          totalRatingsString: '50+',
          sla: {
            deliveryTime: 44,
            lastMileTravel: 1.4,
            serviceability: 'SERVICEABLE',
            slaString: '44 mins',
            lastMileTravelString: '1.4 km',
            iconType: 'ICON_TYPE_EMPTY',
          },
          availability: {
            nextCloseTime: '2024-01-15 00:00:00',
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: 'F',
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: '20% OFF',
            subHeader: 'UPTO ₹50',
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: 'BENEFITS',
              logo: 'v1634558776/swiggy_one/OneLogo_3x.png',
            },
            freedelMessage: 'FREE DELIVERY',
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
              maxDuration: '3000',
              mediaType: 'ADS_MEDIA_ENUM_IMAGE',
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: 'swiggy://menu?restaurant_id=313127&source=collection&query=Kachori',
          text: 'RESTAURANT_MENU',
          type: 'DEEPLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_Contextual',
      },
      relevance: {
        type: 'RELEVANCE_TYPE_ON_MENU_RETURN',
        sectionId: 'MENU_RETURN_FOOD',
      },
    },
  },
  {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
        info: {
          id: '3638',
          name: 'Gupta Brothers -Ballygunge',
          cloudinaryImageId: 'op0gwlbin51kqgplkcl4',
          locality: 'Park Road',
          areaName: 'Ballygunge',
          costForTwo: '₹300 for two',
          cuisines: [
            'North Indian',
            'Chinese',
            'Desserts',
            'South Indian',
            'Indian',
            'Chaat',
            'Mexican',
          ],
          avgRating: 4.4,
          veg: true,
          parentId: '358878',
          avgRatingString: '4.4',
          totalRatingsString: '10K+',
          sla: {
            deliveryTime: 29,
            lastMileTravel: 4,
            serviceability: 'SERVICEABLE',
            slaString: '29 mins',
            lastMileTravelString: '4.0 km',
            iconType: 'ICON_TYPE_EMPTY',
          },
          availability: {
            nextCloseTime: '2024-01-08 22:30:00',
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: 'v1695133679/badges/Pure_Veg111.png',
                description: 'pureveg',
              },
            ],
          },
          isOpen: true,
          type: 'F',
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: 'v1695133679/badges/Pure_Veg111.png',
                      description: 'pureveg',
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: '40% OFF',
            subHeader: 'UPTO ₹80',
          },
          loyaltyDiscoverPresentationInfo: {
            logoCtx: {
              text: 'BENEFITS',
              logo: 'v1634558776/swiggy_one/OneLogo_3x.png',
            },
            freedelMessage: 'FREE DELIVERY',
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
              maxDuration: '3000',
              mediaType: 'ADS_MEDIA_ENUM_IMAGE',
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: 'swiggy://menu?restaurant_id=3638&source=collection&query=Kachori',
          text: 'RESTAURANT_MENU',
          type: 'DEEPLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_Contextual',
      },
      relevance: {
        type: 'RELEVANCE_TYPE_ON_MENU_RETURN',
        sectionId: 'MENU_RETURN_FOOD',
      },
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.card.card.info;
  // console.log(resData.card);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.card.card.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

//not using key(not acceptable) <<<< index as key <<<<<<<<<< unique id(best practice)

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
