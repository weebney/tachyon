/*
This is so unbelieveably hacked together, and will be replaced as soon as I have time.
*/

function changePage(target) {
	document.location.href = window.origin + '/' + target
}

function append() {
	const node = document.createElement("a");
	node.href = getRandomSite();
	const textnode = document.createTextNode(" Anchor");
	node.appendChild(textnode);
	document.getElementById("myList").appendChild(node);
}

function appendNonAnchor() {
	const onode = document.createElement("a");
	const otextnode = document.createTextNode(" Non-Anchor");
	onode.appendChild(otextnode);
	document.getElementById("myList").appendChild(onode);
}

function multipleDomChanges() {
	const node1 = document.createElement("a");
	node1.href = getRandomSite();
	const textnode1 = document.createTextNode(" node1");
	node1.appendChild(textnode1);
	const node2 = document.createElement("a");
	node2.href = getRandomSite();
	const textnode2 = document.createTextNode(" node2");
	node2.appendChild(textnode2);
	document.getElementById("myList").append(node1, node2);
}

function whitelistedAnchor() {
	const onode = document.createElement("a");
	const otextnode = document.createTextNode(" Listed!");
	onode.href = getRandomSite();
	onode.appendChild(otextnode);
	document.getElementById("myList").appendChild(onode);
	onode.dataset.tachyon = "";
}

function sameOrigin() {
	const onode = document.createElement("a");
	const otextnode = document.createTextNode(" Same Origin!");
	onode.href = window.origin;
	onode.appendChild(otextnode);
	document.getElementById("myList").appendChild(onode);
}

function updateDomDelay() {
	setTimeout(() => {
		const onode = document.createElement("a");
		const otextnode = document.createTextNode(" Delayed!");
		onode.href = getRandomSite();
		onode.appendChild(otextnode);
		document.getElementById("myList").appendChild(onode);
	}, 3000);
}


function noHref() {
	const onode = document.createElement("a");
	const otextnode = document.createTextNode(" No Href!");
	onode.appendChild(otextnode);
	document.getElementById("myList").appendChild(onode);
}

function getRandomSite() {
	// taken from Kikobeats/top-sites, see license below
	const sites = [
		{
			"rank": 1,
			"rootDomain": "youtube.com",
			"linkingRootDomains": 100,
			"domainAuthority": 0
		},
		{
			"rank": 2,
			"rootDomain": "www.google.com",
			"linkingRootDomains": 100,
			"domainAuthority": 0
		},
		{
			"rank": 3,
			"rootDomain": "www.blogger.com",
			"linkingRootDomains": 100,
			"domainAuthority": 0
		},
		{
			"rank": 4,
			"rootDomain": "linkedin.com",
			"linkingRootDomains": 99,
			"domainAuthority": 0
		},
		{
			"rank": 5,
			"rootDomain": "microsoft.com",
			"linkingRootDomains": 99,
			"domainAuthority": 0
		},
		{
			"rank": 6,
			"rootDomain": "apple.com",
			"linkingRootDomains": 99,
			"domainAuthority": 0
		},
		{
			"rank": 7,
			"rootDomain": "play.google.com",
			"linkingRootDomains": 99,
			"domainAuthority": 0
		},
		{
			"rank": 8,
			"rootDomain": "support.google.com",
			"linkingRootDomains": 99,
			"domainAuthority": 0
		},
		{
			"rank": 9,
			"rootDomain": "maps.google.com",
			"linkingRootDomains": 98,
			"domainAuthority": 0
		},
		{
			"rank": 10,
			"rootDomain": "wordpress.org",
			"linkingRootDomains": 98,
			"domainAuthority": 0
		},
		{
			"rank": 11,
			"rootDomain": "youtu.be",
			"linkingRootDomains": 98,
			"domainAuthority": 0
		},
		{
			"rank": 12,
			"rootDomain": "docs.google.com",
			"linkingRootDomains": 98,
			"domainAuthority": 0
		},
		{
			"rank": 13,
			"rootDomain": "en.wikipedia.org",
			"linkingRootDomains": 98,
			"domainAuthority": 0
		},
		{
			"rank": 14,
			"rootDomain": "cloudflare.com",
			"linkingRootDomains": 98,
			"domainAuthority": 0
		},
		{
			"rank": 15,
			"rootDomain": "mozilla.org",
			"linkingRootDomains": 98,
			"domainAuthority": 0
		},
		{
			"rank": 16,
			"rootDomain": "whatsapp.com",
			"linkingRootDomains": 97,
			"domainAuthority": 0
		},
		{
			"rank": 17,
			"rootDomain": "sites.google.com",
			"linkingRootDomains": 97,
			"domainAuthority": 0
		},
		{
			"rank": 18,
			"rootDomain": "europa.eu",
			"linkingRootDomains": 97,
			"domainAuthority": 0
		},
		{
			"rank": 19,
			"rootDomain": "adobe.com",
			"linkingRootDomains": 97,
			"domainAuthority": 0
		},
		{
			"rank": 20,
			"rootDomain": "googleusercontent.com",
			"linkingRootDomains": 97,
			"domainAuthority": 0
		},
		{
			"rank": 21,
			"rootDomain": "drive.google.com",
			"linkingRootDomains": 97,
			"domainAuthority": 0
		},
		{
			"rank": 22,
			"rootDomain": "plus.google.com",
			"linkingRootDomains": 97,
			"domainAuthority": 0
		},
		{
			"rank": 23,
			"rootDomain": "accounts.google.com",
			"linkingRootDomains": 97,
			"domainAuthority": 0
		},
		{
			"rank": 24,
			"rootDomain": "bp.blogspot.com",
			"linkingRootDomains": 97,
			"domainAuthority": 0
		},
		{
			"rank": 25,
			"rootDomain": "t.me",
			"linkingRootDomains": 96,
			"domainAuthority": 0
		},
		{
			"rank": 26,
			"rootDomain": "vimeo.com",
			"linkingRootDomains": 96,
			"domainAuthority": 0
		},
		{
			"rank": 27,
			"rootDomain": "uol.com.br",
			"linkingRootDomains": 96,
			"domainAuthority": 0
		},
		{
			"rank": 28,
			"rootDomain": "vk.com",
			"linkingRootDomains": 96,
			"domainAuthority": 0
		},
		{
			"rank": 29,
			"rootDomain": "policies.google.com",
			"linkingRootDomains": 96,
			"domainAuthority": 0
		},
		{
			"rank": 30,
			"rootDomain": "github.com",
			"linkingRootDomains": 96,
			"domainAuthority": 0
		},
		{
			"rank": 31,
			"rootDomain": "amazon.com",
			"linkingRootDomains": 96,
			"domainAuthority": 0
		},
		{
			"rank": 32,
			"rootDomain": "facebook.com",
			"linkingRootDomains": 96,
			"domainAuthority": 0
		},
		{
			"rank": 33,
			"rootDomain": "istockphoto.com",
			"linkingRootDomains": 96,
			"domainAuthority": 0
		},
		{
			"rank": 34,
			"rootDomain": "bbc.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 35,
			"rootDomain": "live.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 36,
			"rootDomain": "search.google.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 37,
			"rootDomain": "forbes.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 38,
			"rootDomain": "who.int",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 39,
			"rootDomain": "nih.gov",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 40,
			"rootDomain": "cnn.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 41,
			"rootDomain": "line.me",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 42,
			"rootDomain": "files.wordpress.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 43,
			"rootDomain": "w3.org",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 44,
			"rootDomain": "google.com.br",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 45,
			"rootDomain": "wikimedia.org",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 46,
			"rootDomain": "creativecommons.org",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 47,
			"rootDomain": "theguardian.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 48,
			"rootDomain": "brandbucket.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 49,
			"rootDomain": "opera.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 50,
			"rootDomain": "bbc.co.uk",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 51,
			"rootDomain": "netvibes.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 52,
			"rootDomain": "msn.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 53,
			"rootDomain": "paypal.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 54,
			"rootDomain": "www.weebly.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 55,
			"rootDomain": "www.yahoo.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 56,
			"rootDomain": "developers.google.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 57,
			"rootDomain": "news.google.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 58,
			"rootDomain": "google.es",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 59,
			"rootDomain": "dailymotion.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 60,
			"rootDomain": "pt.wikipedia.org",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 61,
			"rootDomain": "fr.wikipedia.org",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 62,
			"rootDomain": "imdb.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 63,
			"rootDomain": "draft.blogger.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 64,
			"rootDomain": "tools.google.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 65,
			"rootDomain": "es.wikipedia.org",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 66,
			"rootDomain": "buydomains.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 67,
			"rootDomain": "ok.ru",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 68,
			"rootDomain": "medium.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 69,
			"rootDomain": "nytimes.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 70,
			"rootDomain": "google.co.jp",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 71,
			"rootDomain": "shopify.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 72,
			"rootDomain": "gstatic.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 73,
			"rootDomain": "enable-javascript.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 74,
			"rootDomain": "feedburner.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 75,
			"rootDomain": "globo.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 76,
			"rootDomain": "gravatar.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 77,
			"rootDomain": "slideshare.net",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 78,
			"rootDomain": "jimdofree.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 79,
			"rootDomain": "dropbox.com",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 80,
			"rootDomain": "google.de",
			"linkingRootDomains": 95,
			"domainAuthority": 0
		},
		{
			"rank": 81,
			"rootDomain": "estadao.com.br",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 82,
			"rootDomain": "mediafire.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 83,
			"rootDomain": "www.gov.uk",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 84,
			"rootDomain": "afternic.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 85,
			"rootDomain": "get.google.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 86,
			"rootDomain": "youronlinechoices.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 87,
			"rootDomain": "storage.googleapis.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 88,
			"rootDomain": "soundcloud.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 89,
			"rootDomain": "google.pl",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 90,
			"rootDomain": "domainmarket.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 91,
			"rootDomain": "office.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 92,
			"rootDomain": "washingtonpost.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 93,
			"rootDomain": "cdc.gov",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 94,
			"rootDomain": "plesk.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 95,
			"rootDomain": "scribd.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 96,
			"rootDomain": "ft.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 97,
			"rootDomain": "ytimg.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 98,
			"rootDomain": "time.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 99,
			"rootDomain": "change.org",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 100,
			"rootDomain": "google.fr",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 101,
			"rootDomain": "usatoday.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 102,
			"rootDomain": "abc.es",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 103,
			"rootDomain": "namecheap.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 104,
			"rootDomain": "pixabay.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 105,
			"rootDomain": "aboutads.info",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 106,
			"rootDomain": "independent.co.uk",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 107,
			"rootDomain": "ig.com.br",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 108,
			"rootDomain": "wp.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 109,
			"rootDomain": "issuu.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 110,
			"rootDomain": "webmd.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 111,
			"rootDomain": "bing.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 112,
			"rootDomain": "shutterstock.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 113,
			"rootDomain": "nasa.gov",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 114,
			"rootDomain": "businessinsider.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 115,
			"rootDomain": "ru.wikipedia.org",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 116,
			"rootDomain": "planalto.gov.br",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 117,
			"rootDomain": "telegram.me",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 118,
			"rootDomain": "terra.com.br",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 119,
			"rootDomain": "dailymail.co.uk",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 120,
			"rootDomain": "twitter.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 121,
			"rootDomain": "mirror.co.uk",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 122,
			"rootDomain": "picasaweb.google.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 123,
			"rootDomain": "tiktok.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 124,
			"rootDomain": "myaccount.google.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 125,
			"rootDomain": "archive.org",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 126,
			"rootDomain": "abril.com.br",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 127,
			"rootDomain": "4shared.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 128,
			"rootDomain": "nature.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 129,
			"rootDomain": "huffingtonpost.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 130,
			"rootDomain": "google.co.uk",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 131,
			"rootDomain": "thesun.co.uk",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 132,
			"rootDomain": "goo.gl",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 133,
			"rootDomain": "mail.ru",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 134,
			"rootDomain": "hatena.ne.jp",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 135,
			"rootDomain": "huffpost.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 136,
			"rootDomain": "instagram.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 137,
			"rootDomain": "wikia.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 138,
			"rootDomain": "amazon.co.uk",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 139,
			"rootDomain": "amazon.es",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 140,
			"rootDomain": "samsung.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 141,
			"rootDomain": "mail.google.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 142,
			"rootDomain": "researchgate.net",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 143,
			"rootDomain": "telegraph.co.uk",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 144,
			"rootDomain": "pinterest.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 145,
			"rootDomain": "cnet.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 146,
			"rootDomain": "google.it",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 147,
			"rootDomain": "fandom.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 148,
			"rootDomain": "dan.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 149,
			"rootDomain": "indiatimes.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 150,
			"rootDomain": "wa.me",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 151,
			"rootDomain": "list-manage.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 152,
			"rootDomain": "hugedomains.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 153,
			"rootDomain": "yadi.sk",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 154,
			"rootDomain": "marketingplatform.google....",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 155,
			"rootDomain": "foxnews.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 156,
			"rootDomain": "cpanel.net",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 157,
			"rootDomain": "un.org",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 158,
			"rootDomain": "bloomberg.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 159,
			"rootDomain": "wsj.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 160,
			"rootDomain": "forms.gle",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 161,
			"rootDomain": "de.wikipedia.org",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 162,
			"rootDomain": "news.yahoo.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 163,
			"rootDomain": "fb.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 164,
			"rootDomain": "amazon.de",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 165,
			"rootDomain": "networkadvertising.org",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 166,
			"rootDomain": "photos.google.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 167,
			"rootDomain": "aliexpress.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 168,
			"rootDomain": "imageshack.us",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 169,
			"rootDomain": "booking.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 170,
			"rootDomain": "bit.ly",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 171,
			"rootDomain": "reuters.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 172,
			"rootDomain": "elpais.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 173,
			"rootDomain": "t.co",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 174,
			"rootDomain": "amazon.co.jp",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 175,
			"rootDomain": "myspace.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 176,
			"rootDomain": "cbsnews.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 177,
			"rootDomain": "tinyurl.com",
			"linkingRootDomains": 94,
			"domainAuthority": 0
		},
		{
			"rank": 178,
			"rootDomain": "latimes.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 179,
			"rootDomain": "target.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 180,
			"rootDomain": "britannica.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 181,
			"rootDomain": "www.wix.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 182,
			"rootDomain": "yahoo.co.jp",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 183,
			"rootDomain": "academia.edu",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 184,
			"rootDomain": "mit.edu",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 185,
			"rootDomain": "ovhcloud.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 186,
			"rootDomain": "www.livejournal.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 187,
			"rootDomain": "mega.nz",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 188,
			"rootDomain": "e-monsite.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 189,
			"rootDomain": "buzzfeed.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 190,
			"rootDomain": "lemonde.fr",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 191,
			"rootDomain": "gnu.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 192,
			"rootDomain": "wired.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 193,
			"rootDomain": "apache.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 194,
			"rootDomain": "steampowered.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 195,
			"rootDomain": "google.ru",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 196,
			"rootDomain": "techcrunch.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 197,
			"rootDomain": "sciencedirect.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 198,
			"rootDomain": "walmart.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 199,
			"rootDomain": "adssettings.google.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 200,
			"rootDomain": "ca.gov",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 201,
			"rootDomain": "zoom.us",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 202,
			"rootDomain": "instructables.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 203,
			"rootDomain": "akamaized.net",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 204,
			"rootDomain": "surveymonkey.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 205,
			"rootDomain": "ouest-france.fr",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 206,
			"rootDomain": "ebay.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 207,
			"rootDomain": "webnode.page",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 208,
			"rootDomain": "id.wikipedia.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 209,
			"rootDomain": "sfgate.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 210,
			"rootDomain": "npr.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 211,
			"rootDomain": "usnews.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 212,
			"rootDomain": "francetvinfo.fr",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 213,
			"rootDomain": "engadget.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 214,
			"rootDomain": "doi.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 215,
			"rootDomain": "groups.google.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 216,
			"rootDomain": "kickstarter.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 217,
			"rootDomain": "ovh.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 218,
			"rootDomain": "canada.ca",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 219,
			"rootDomain": "nicovideo.jp",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 220,
			"rootDomain": "xing.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 221,
			"rootDomain": "yelp.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 222,
			"rootDomain": "www.wikipedia.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 223,
			"rootDomain": "abc.net.au",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 224,
			"rootDomain": "huawei.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 225,
			"rootDomain": "amazon.fr",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 226,
			"rootDomain": "detik.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 227,
			"rootDomain": "home.pl",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 228,
			"rootDomain": "search.yahoo.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 229,
			"rootDomain": "google.nl",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 230,
			"rootDomain": "yandex.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 231,
			"rootDomain": "plos.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 232,
			"rootDomain": "cointernet.com.co",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 233,
			"rootDomain": "twitch.tv",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 234,
			"rootDomain": "playstation.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 235,
			"rootDomain": "aol.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 236,
			"rootDomain": "lefigaro.fr",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 237,
			"rootDomain": "newyorker.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 238,
			"rootDomain": "naver.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 239,
			"rootDomain": "rakuten.co.jp",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 240,
			"rootDomain": "000webhost.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 241,
			"rootDomain": "discord.gg",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 242,
			"rootDomain": "photos1.blogger.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 243,
			"rootDomain": "urbandictionary.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 244,
			"rootDomain": "ted.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 245,
			"rootDomain": "wiktionary.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 246,
			"rootDomain": "hollywoodreporter.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 247,
			"rootDomain": "secureserver.net",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 248,
			"rootDomain": "hp.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 249,
			"rootDomain": "www.over-blog.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 250,
			"rootDomain": "doubleclick.net",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 251,
			"rootDomain": "linktr.ee",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 252,
			"rootDomain": "statista.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 253,
			"rootDomain": "bloglovin.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 254,
			"rootDomain": "rambler.ru",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 255,
			"rootDomain": "espn.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 256,
			"rootDomain": "nationalgeographic.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 257,
			"rootDomain": "finance.yahoo.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 258,
			"rootDomain": "stanford.edu",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 259,
			"rootDomain": "amazonaws.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 260,
			"rootDomain": "alicdn.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 261,
			"rootDomain": "nginx.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 262,
			"rootDomain": "rtve.es",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 263,
			"rootDomain": "wikihow.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 264,
			"rootDomain": "ietf.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 265,
			"rootDomain": "eventbrite.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 266,
			"rootDomain": "20minutos.es",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 267,
			"rootDomain": "disney.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 268,
			"rootDomain": "cbc.ca",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 269,
			"rootDomain": "oup.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 270,
			"rootDomain": "welt.de",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 271,
			"rootDomain": "spotify.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 272,
			"rootDomain": "vkontakte.ru",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 273,
			"rootDomain": "zdf.de",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 274,
			"rootDomain": "picasa.google.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 275,
			"rootDomain": "xbox.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 276,
			"rootDomain": "dreamstime.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 277,
			"rootDomain": "offset.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 278,
			"rootDomain": "hubspot.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 279,
			"rootDomain": "discord.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 280,
			"rootDomain": "spiegel.de",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 281,
			"rootDomain": "lexpress.fr",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 282,
			"rootDomain": "themeforest.net",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 283,
			"rootDomain": "icann.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 284,
			"rootDomain": "thetimes.co.uk",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 285,
			"rootDomain": "cnil.fr",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 286,
			"rootDomain": "nydailynews.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 287,
			"rootDomain": "economist.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 288,
			"rootDomain": "ziddu.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 289,
			"rootDomain": "sedo.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 290,
			"rootDomain": "gmail.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 291,
			"rootDomain": "tmz.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 292,
			"rootDomain": "rt.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 293,
			"rootDomain": "amazon.it",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 294,
			"rootDomain": "clarin.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 295,
			"rootDomain": "skype.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 296,
			"rootDomain": "ovh.net",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 297,
			"rootDomain": "zippyshare.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 298,
			"rootDomain": "newsweek.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 299,
			"rootDomain": "ria.ru",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 300,
			"rootDomain": "freepik.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 301,
			"rootDomain": "whitehouse.gov",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 302,
			"rootDomain": "guardian.co.uk",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 303,
			"rootDomain": "cnbc.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 304,
			"rootDomain": "imageshack.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 305,
			"rootDomain": "translate.google.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 306,
			"rootDomain": "smh.com.au",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 307,
			"rootDomain": "books.google.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 308,
			"rootDomain": "leparisien.fr",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 309,
			"rootDomain": "pl.wikipedia.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 310,
			"rootDomain": "sciencedaily.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 311,
			"rootDomain": "disqus.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 312,
			"rootDomain": "godaddy.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 313,
			"rootDomain": "insider.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 314,
			"rootDomain": "dynadot.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 315,
			"rootDomain": "ibm.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 316,
			"rootDomain": "mashable.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 317,
			"rootDomain": "ipv4.google.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 318,
			"rootDomain": "ja.wikipedia.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 319,
			"rootDomain": "tripadvisor.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 320,
			"rootDomain": "privacyshield.gov",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 321,
			"rootDomain": "express.co.uk",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 322,
			"rootDomain": "sputniknews.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 323,
			"rootDomain": "oracle.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 324,
			"rootDomain": "ggpht.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 325,
			"rootDomain": "abcnews.go.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 326,
			"rootDomain": "amzn.to",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 327,
			"rootDomain": "akamaihd.net",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 328,
			"rootDomain": "pinterest.fr",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 329,
			"rootDomain": "windows.net",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 330,
			"rootDomain": "nginx.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 331,
			"rootDomain": "standard.co.uk",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 332,
			"rootDomain": "www.gov.br",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 333,
			"rootDomain": "radiofrance.fr",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 334,
			"rootDomain": "evernote.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 335,
			"rootDomain": "gooyaabitemplates.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 336,
			"rootDomain": "sendspace.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 337,
			"rootDomain": "it.wikipedia.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 338,
			"rootDomain": "deezer.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 339,
			"rootDomain": "unesco.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 340,
			"rootDomain": "fb.me",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 341,
			"rootDomain": "alexa.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 342,
			"rootDomain": "berkeley.edu",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 343,
			"rootDomain": "vice.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 344,
			"rootDomain": "redbull.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 345,
			"rootDomain": "yandex.ru",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 346,
			"rootDomain": "sapo.pt",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 347,
			"rootDomain": "cpanel.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 348,
			"rootDomain": "dw.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 349,
			"rootDomain": "gofundme.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 350,
			"rootDomain": "nbcnews.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 351,
			"rootDomain": "cornell.edu",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 352,
			"rootDomain": "theatlantic.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 353,
			"rootDomain": "bandcamp.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 354,
			"rootDomain": "zendesk.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 355,
			"rootDomain": "ssl-images-amazon.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 356,
			"rootDomain": "php.net",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 357,
			"rootDomain": "timeweb.ru",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 358,
			"rootDomain": "android.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 359,
			"rootDomain": "elmundo.es",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 360,
			"rootDomain": "netlify.app",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 361,
			"rootDomain": "ftc.gov",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 362,
			"rootDomain": "metro.co.uk",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 363,
			"rootDomain": "pexels.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 364,
			"rootDomain": "addtoany.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 365,
			"rootDomain": "thenai.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 366,
			"rootDomain": "sakura.ne.jp",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 367,
			"rootDomain": "google.co.in",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 368,
			"rootDomain": "code.google.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 369,
			"rootDomain": "netflix.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 370,
			"rootDomain": "prezi.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 371,
			"rootDomain": "bp2.blogger.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 372,
			"rootDomain": "lavanguardia.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 373,
			"rootDomain": "rapidshare.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 374,
			"rootDomain": "harvard.edu",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 375,
			"rootDomain": "nikkei.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 376,
			"rootDomain": "goodreads.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 377,
			"rootDomain": "springer.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 378,
			"rootDomain": "arxiv.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 379,
			"rootDomain": "googleblog.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 380,
			"rootDomain": "liveinternet.ru",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 381,
			"rootDomain": "cambridge.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 382,
			"rootDomain": "ea.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 383,
			"rootDomain": "sky.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 384,
			"rootDomain": "psychologytoday.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 385,
			"rootDomain": "unsplash.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 386,
			"rootDomain": "hindustantimes.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 387,
			"rootDomain": "xinhuanet.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 388,
			"rootDomain": "ikea.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 389,
			"rootDomain": "qq.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 390,
			"rootDomain": "google.ca",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 391,
			"rootDomain": "sciencemag.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 392,
			"rootDomain": "clickbank.net",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 393,
			"rootDomain": "mozilla.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 394,
			"rootDomain": "theverge.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 395,
			"rootDomain": "quora.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 396,
			"rootDomain": "m.wikipedia.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 397,
			"rootDomain": "biglobe.ne.jp",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 398,
			"rootDomain": "pbs.org",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 399,
			"rootDomain": "addthis.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 400,
			"rootDomain": "about.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 401,
			"rootDomain": "nypost.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 402,
			"rootDomain": "outlook.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 403,
			"rootDomain": "www.canalblog.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 404,
			"rootDomain": "gizmodo.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 405,
			"rootDomain": "photobucket.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 406,
			"rootDomain": "reg.ru",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 407,
			"rootDomain": "alibaba.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 408,
			"rootDomain": "weibo.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 409,
			"rootDomain": "wiley.com",
			"linkingRootDomains": 93,
			"domainAuthority": 0
		},
		{
			"rank": 410,
			"rootDomain": "euronews.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 411,
			"rootDomain": "gsmarena.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 412,
			"rootDomain": "trustpilot.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 413,
			"rootDomain": "prnewswire.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 414,
			"rootDomain": "bitly.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 415,
			"rootDomain": "fbsbx.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 416,
			"rootDomain": "lycos.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 417,
			"rootDomain": "rottentomatoes.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 418,
			"rootDomain": "geocities.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 419,
			"rootDomain": "ameblo.jp",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 420,
			"rootDomain": "megaupload.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 421,
			"rootDomain": "epa.gov",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 422,
			"rootDomain": "focus.de",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 423,
			"rootDomain": "nba.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 424,
			"rootDomain": "variety.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 425,
			"rootDomain": "wisc.edu",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 426,
			"rootDomain": "amazon.in",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 427,
			"rootDomain": "gutenberg.org",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 428,
			"rootDomain": "interia.pl",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 429,
			"rootDomain": "narod.ru",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 430,
			"rootDomain": "noaa.gov",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 431,
			"rootDomain": "apnews.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 432,
			"rootDomain": "allaboutcookies.org",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 433,
			"rootDomain": "reverbnation.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 434,
			"rootDomain": "java.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 435,
			"rootDomain": "stuff.co.nz",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 436,
			"rootDomain": "usgs.gov",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 437,
			"rootDomain": "blackberry.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 438,
			"rootDomain": "lg.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 439,
			"rootDomain": "excite.co.jp",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 440,
			"rootDomain": "orange.fr",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 441,
			"rootDomain": "worldbank.org",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 442,
			"rootDomain": "m.me",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 443,
			"rootDomain": "amazon.ca",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 444,
			"rootDomain": "theconversation.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 445,
			"rootDomain": "mailchimp.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 446,
			"rootDomain": "feedproxy.google.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 447,
			"rootDomain": "viglink.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 448,
			"rootDomain": "espn.go.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 449,
			"rootDomain": "storage.canalblog.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 450,
			"rootDomain": "digg.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 451,
			"rootDomain": "indiegogo.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 452,
			"rootDomain": "marketwatch.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 453,
			"rootDomain": "fifa.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 454,
			"rootDomain": "home.neustar",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 455,
			"rootDomain": "sina.com.cn",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 456,
			"rootDomain": "liberation.fr",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 457,
			"rootDomain": "theglobeandmail.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 458,
			"rootDomain": "ubuntu.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 459,
			"rootDomain": "utexas.edu",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 460,
			"rootDomain": "intel.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 461,
			"rootDomain": "ads.google.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 462,
			"rootDomain": "deloitte.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 463,
			"rootDomain": "cbslocal.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 464,
			"rootDomain": "tvtropes.org",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 465,
			"rootDomain": "tinypic.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 466,
			"rootDomain": "bp1.blogger.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 467,
			"rootDomain": "parallels.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 468,
			"rootDomain": "justgiving.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 469,
			"rootDomain": "usc.edu",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 470,
			"rootDomain": "cutt.ly",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 471,
			"rootDomain": "soratemplates.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 472,
			"rootDomain": "telegra.ph",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 473,
			"rootDomain": "bigcommerce.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 474,
			"rootDomain": "public-api.wordpress.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 475,
			"rootDomain": "box.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 476,
			"rootDomain": "scientificamerican.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 477,
			"rootDomain": "psu.edu",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 478,
			"rootDomain": "loc.gov",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 479,
			"rootDomain": "python.org",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 480,
			"rootDomain": "mynavi.jp",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 481,
			"rootDomain": "archives.gov",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 482,
			"rootDomain": "slate.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 483,
			"rootDomain": "teamviewer.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 484,
			"rootDomain": "usda.gov",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 485,
			"rootDomain": "gfycat.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 486,
			"rootDomain": "jstor.org",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 487,
			"rootDomain": "debian.org",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 488,
			"rootDomain": "businesswire.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 489,
			"rootDomain": "mysql.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 490,
			"rootDomain": "asahi.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 491,
			"rootDomain": "gitlab.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 492,
			"rootDomain": "thestar.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 493,
			"rootDomain": "ovh.co.uk",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 494,
			"rootDomain": "kotaku.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 495,
			"rootDomain": "com.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 496,
			"rootDomain": "marriott.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 497,
			"rootDomain": "patreon.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 498,
			"rootDomain": "admin.ch",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 499,
			"rootDomain": "bp0.blogger.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		},
		{
			"rank": 500,
			"rootDomain": "pcmag.com",
			"linkingRootDomains": 92,
			"domainAuthority": 0
		}
	]
	// The above JSON is licensed under the following license:
	/*
	The MIT License (MIT)

	Copyright © 2018 Kiko Beats <josefrancisco.verdu@gmail.com> (kikobeats.com)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
	*/

	return "https://" + sites[Math.floor(Math.random() * 500)].rootDomain;

}
