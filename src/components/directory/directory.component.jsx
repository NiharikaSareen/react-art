import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'
class Directory extends React.Component {
	constructor(){
		super();
		this.state = {
			sections:[{
				title: 'Resin',
				imageUrl : 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
				id: 1,
				linkUrl: 'hats'
			},
			{
				title: 'water Paint',
				imageUrl : 'https://images.unsplash.com/photo-1545594861-3bef43ff2fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
				id: 2,
				linkUrl: ''
			},
			{
				title: 'acrylic',
				imageUrl : 'https://images.unsplash.com/photo-1542376751-fd90f8f32164?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1460&q=80',
				id: 3,
				linkUrl: ''
			},
			{
				title: 'Macrame',
				imageUrl : 'https://images.unsplash.com/photo-1541787457429-b1766a4766b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
				size: 'large',
				id: 4,
				linkUrl: ''
				
			},
			{
				title: 'Scripting',
				imageUrl : 'https://images.unsplash.com/photo-1542838077-5fd2ba553bbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
				size: 'large',
				id: 5,
				linkUrl: ''
				
			}]
		}
	}
	render(){
		return(
			<div className='directory-menu'>
				{this.state.sections.map(({title,imageUrl,id,size, linkUrl}) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
				))}
			</div>
		);
	}
}

export default Directory;