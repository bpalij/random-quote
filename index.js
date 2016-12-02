var quotes=[{
	"quote":"It May Be That Those Who Do Most, Dream Most.",
	"author":"Stephen Leacock",
},
{
	"quote":"Do Not Follow Where The Path May Lead. Go Instead Where There Is No Path And Leave A Trail.",
	"author":"Ralph Waldo Emerson",
},
{
	"quote":"Be Willing To Be Uncomfortable. Be Comfortable Being Uncomfortable. It May Get Tough, But It's A Small Price To Pay For Living A Dream.",
	"author":"Peter McWilliams",
},
{
	"quote":"The Future Belongs To Those Who Believe In The Beauty Of Their Dreams.",
	"author":"Eleanor Roosevelt",
},
{
	"quote":"There Is Only One Thing That Makes A Dream Impossible To Achieve: The Fear Of Failure.",
	"author":"Paulo Coelho",
},
{
	"quote":"Dreams Are The Touchstones Of Our Characters.",
	"author":"Henry David Thoreau",
},
{
	"quote":"If You Can Dream It, You Can Do It. Always Remember That This Whole Thing Was Started With A Dream And A Mouse.",
	"author":"Walt Disney",
},
{
	"quote":"I don't dream at night, I dream all day; I dream for a living.",
	"author":"Steven Spielberg",
},
{
	"quote":"The Biggest Adventure You Can Ever Take Is To Live The Life Of Your Dreams.",
	"author":"Oprah Winfrey",
},
{
	"quote":"20 Years From Now You Will Be More Disappointed By The Things That You Didn't Do Than By The Ones You Did Do. So Throw Off The Bowlines. Sail Away From The Safe Harbor. Catch The Trade Winds In Your Sails. Explore. Dream. Discover.",
	"author":"Mark Twain",
},
];
start();
function rangeRandomWhole(min,max){
	return (Math.floor(Math.random()*(max-min+1)+min));
};
function start(){
	var n = rangeRandomWhole(0,quotes.length-1);
	$("#quote").text(quotes[n].quote);
	$("#author").text(quotes[n].author);
}
