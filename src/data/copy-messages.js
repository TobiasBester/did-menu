import { icons } from './icons';

export const copyMessages = {
	chinese: {
		inspiredDiningChinese: '靈感餐飲',
		debbiesInspiredDiningChinese: '黛比的美食',
		youAreCrazyChinese: '你瘋了',
		neverGonnaGiveYouUpChinese: '绝不会放弃你',
	},
	title: {
		debbiesInspiredDining: 'Debbie\'s Inspired Dining',
		titleSubtext: 'Authentic Chinese Cooking',
	},
	contact: {
		stripInfo: 'Garsfontein, Pretoria East | (+27) 84 514 6870',
	},
	menuItems: {
		foodMenu: { text: 'Menu', to: 'menu' },
		gallery: { text: 'Gallery', to: 'gallery' },
		myStory: { text: 'My Story', to: 'mystory' },
		orderNow: { text: 'Order Now', to: 'contact' },
	},
	info: {
		location: { icon: icons.location, label: 'location', value: 'Garsfontein, Pretoria East' },
		phone: { icon: icons.phone, label: 'phone', value: '(+27) 84 514 6870' },
		email: { icon: icons.email, label: 'email', value: 'dbester1959@gmail.com' },
	},
	socialMedia: {
		instagram: { label: 'Instagram', icon: icons.instagram, href: 'https://www.instagram.com/besterdebbie/' },
		facebook: { label: 'Facebook', icon: icons.facebook, href: 'https://www.facebook.com/inspireddebbie/' },
	},
	anchors: [
		'landing', 'menu', 'gallery', 'mystory', 'contact'
	],
	webSections: {
		landing: { section: 'landing', text: 'Welcome' },
		menu: { section: 'menu', text: 'Menu' },
		gallery: { section: 'gallery', text: 'Gallery' },
		about: { section: 'mystory', text: 'My Story' },
		contact: { section: 'contact', text: 'Contact for Order' },
	},
	menuSection: {
		about: {
			heading: 'MENU',
			text: `Debbie's Inspired Dining combines classic recipes from the kitchens 
				of the past decades' premier Chinese restaurants with a sprinkling of
				the chef's modern flair.
				
				The menu brings together the best of Cantonese cuisine and is
				supplemented by favourites from the rest of Asia.
				
				Dishes are created with the freshest ingredients, the finest
				spices, and the utmost of care, to deliver flavours few can forget.`
		}
	}
};
