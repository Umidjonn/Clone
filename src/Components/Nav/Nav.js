import {
	home,
	trending,
	subscriptions,
	library,
	history,
	WatchLater,
	Favourites,
	Liked,
	Music,
	Games,
	ShowMore,
} from './Icon/Icon';
import UserOne from '../../Assets/images/Gussie.png';
import UserTwo from '../../Assets/images/Nora.png';
import UserThree from '../../Assets/images/Belle.png';
import UserFour from '../../Assets/images/Eunice.png';
import UserFive from '../../Assets/images/Emma.png';
import UserSix from '../../Assets/images/Leah.png';
import Item from './Item/Item';
import Items from './Items/items';
import './nav.css';
import React from 'react';
// import { NavLink } from 'react-router-dom';

let userArr = [
	{
		id: 1,
		src: UserOne,
		title: 'quidem molestiae enim',
	},
	{
		id: 2,
		src: UserTwo,
		title: 'sunt qui excepturi placeat culpa',
	},
	{
		id: 3,
		src: UserThree,
		title: 'omnis laborum odio',
	},
	{
		id: 4,
		src: UserFour,
		title: 'non esse culpa molestiae omnis sed optio',
	},
	{
		id: 5,
		src: UserFive,
		title: 'eaque aut omnis a',
	},
	{
		id: 6,
		src: UserSix,
		title: 'natus impedit quibusdam illo est',
	},
];

const Nav = () => {
	return (
		<div>
			<div className='site-nav'>
				<ol className='nav-list'>
					<Item Icon={home} text={'Home'} PathName={'/'} />
					<Item Icon={trending} text={'Trending'} PathName={'/'} />
					<Item
						Icon={subscriptions}
						text={'Subscriptions'}
						PathName={'/'}
					/>
					<Item Icon={library} text={'Library'} PathName={'/'} />
					<Item Icon={history} text={'History'} PathName={'/'} />
					<Item Icon={WatchLater} text={'Watch later'} PathName={'/'} />
					<Item Icon={Favourites} text={'Favourites'} PathName={'/'} />
					<Item Icon={Liked} text={'Liked videos'} PathName={'/'} />
					<Item Icon={Music} text={'Music'} PathName={'/'} />
					<Item Icon={Games} text={'Games'} PathName={'/'} />
					<Item Icon={ShowMore} text={'Show more'} PathName={'/'} />
				</ol>
				<p className='nav-sub'>Subscriptions</p>

				<ul className='nav-list'>
					{userArr.map((e) => {
						return (
							<Items key={e.id} src={e.src} text={e.title} id={e.id} />
						);
					})}
				</ul>

				<button className='nav-settings'>
					<svg
						width='19'
						height='20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							opacity='.24'
							fillRule='evenodd'
							clipRule='evenodd'
							d='m13.468 3.73-.742-.434s-.776-2.11-.842-2.254C11.637.447 10.961 0 10.284 0H8.42c-.675 0-1.349.446-1.613 1.068-.054.118-.821 2.228-.821 2.228l-.734.436s-2.236-.39-2.392-.404c-.64-.084-1.365.279-1.704.866l-.93 1.612a1.813 1.813 0 0 0 .118 1.931c.074.106 1.519 1.835 1.519 1.835s-.012.285-.012.428c0 .303.01.429.01.429S.42 12.157.328 12.285c-.392.512-.44 1.322-.102 1.909l.931 1.612c.338.585 1.06.945 1.731.863.13-.012 2.343-.402 2.343-.402l.745.425s.778 2.122.843 2.265c.247.596.924 1.043 1.602 1.043h1.862c.675 0 1.348-.446 1.613-1.068.054-.117.83-2.232.83-2.232l.73-.431 2.38.402c.646.085 1.372-.278 1.71-.865l.932-1.612a1.813 1.813 0 0 0-.119-1.931c-.074-.106-1.52-1.826-1.52-1.826s.013-.291.013-.437c0-.303-.01-.43-.01-.43s1.443-1.727 1.534-1.855c.392-.512.44-1.322.102-1.909l-.931-1.612a1.813 1.813 0 0 0-1.732-.863c-.129.012-2.347.399-2.347.399Zm-2.526.575.135.45.431.183c.408.174.793.397 1.147.664l.375.282.457-.108c.664-.158 2.225-.42 2.374-.438.087-.01.835 1.286.783 1.356-.09.12-1.097 1.34-1.566 1.837l-.321.34.055.466a5.579 5.579 0 0 1 0 1.327l-.055.465.321.34c.469.496 1.475 1.717 1.566 1.838.052.07-.731 1.361-.783 1.355-.15-.019-1.71-.28-2.374-.438l-.457-.108-.375.282c-.354.267-.74.49-1.147.664l-.431.184-.135.449c-.195.653-.749 2.135-.808 2.273-.034.08-1.53.08-1.565 0-.059-.138-.612-1.62-.807-2.273l-.135-.45-.431-.183a5.494 5.494 0 0 1-1.147-.664l-.375-.282-.457.109c-.664.157-2.225.418-2.375.437-.086.01-.835-1.286-.782-1.356.09-.12 1.097-1.34 1.566-1.837l.321-.34-.056-.465a5.569 5.569 0 0 1 0-1.328l.056-.465-.321-.34C3.157 8.035 2.15 6.814 2.06 6.693c-.053-.07.696-1.365.782-1.355.15.018 1.71.28 2.375.438l.457.108.375-.282c.354-.267.74-.49 1.147-.664l.431-.184.135-.449c.195-.653.749-2.135.807-2.273.035-.08 1.531-.08 1.565 0 .06.138.613 1.62.808 2.273ZM9.352 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm1-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
							fill='#000'
						/>
					</svg>
					<p>Setting</p>
				</button>
			</div>
		</div>
	);
};
export default Nav;

// export default function GroupedSelect() {
//   return (
//     <div>
//       <FormControl sx={{ m: 1, minWidth: 120 }}>
//         <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
//         <Select native defaultValue="" id="grouped-native-select" label="Grouping">
//           <option aria-label="None" value="" />
//           <optgroup label="Category 1">
//             <option value={1}>Option 1</option>
//             <option value={2}>Option 2</option>
//           </optgroup>
//           <optgroup label="Category 2">
//             <option value={3}>Option 3</option>
//             <option value={4}>Option 4</option>
//           </optgroup>
//         </Select>
//       </FormControl>
//       <FormControl sx={{ m: 1, minWidth: 120 }}>
//         <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
//         <Select defaultValue="" id="grouped-select" label="Grouping">
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <ListSubheader>Category 1</ListSubheader>
//           <MenuItem value={1}>Option 1</MenuItem>
//           <MenuItem value={2}>Option 2</MenuItem>
//           <ListSubheader>Category 2</ListSubheader>
//           <MenuItem value={3}>Option 3</MenuItem>
//           <MenuItem value={4}>Option 4</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }

{
	/* <Items src={UserOne} text={"Gussie Singleton"}/>
    <Items src={UserTwo} text={"Nora Francis"}/>
    <Items src={UserThree} text={"Belle Briggs"}/>
    <Items src={UserFour} text={"Eunice Cortez"}/>
    <Items src={UserFive} text={"Emma Hanson"}/>
  <Items src={UserSix} text={"Leah Berry"}/> */
}

// item.id === userArr.id ? userArr.src : ""

// userArr.forEach(e =>{
//   let findImg = e.id === 1
//   // console.log(findImg)
//   if ( findImg ) {
//     console.log(findImg)
//     console.log(e.src)
//     return e.src
//   }
