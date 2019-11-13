import React from 'react'
import MenuItem from '../menu-item/menu-item.component';

import './directory.style.css'

export default class Directory extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
            section: [
                {
                    title: 'hats',
                    imgUrl: 'https://instagram.fsgn5-3.fna.fbcdn.net/vp/6b8262dff1d9f10647f6efa4d5d2cc1f/5E4F0E0E/t51.2885-15/e35/s1080x1080/72157402_144586506898895_7085008696955493743_n.jpg?_nc_ht=instagram.fsgn5-3.fna.fbcdn.net&_nc_cat=111',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imgUrl: 'https://instagram.fsgn5-2.fna.fbcdn.net/vp/0ded1b90f91f108066dcbfb5d78e2a47/5E5022DA/t51.2885-15/e35/p1080x1080/74880454_456932818254233_4420452603249155163_n.jpg?_nc_ht=instagram.fsgn5-2.fna.fbcdn.net&_nc_cat=105',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imgUrl: 'https://instagram.fsgn5-4.fna.fbcdn.net/vp/84437ba38094e20b5897cd73c606ee7f/5E8B4986/t51.2885-15/e35/67686899_134922921100310_738340757576349553_n.jpg?_nc_ht=instagram.fsgn5-4.fna.fbcdn.net&_nc_cat=102',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imgUrl: 'https://instagram.fsgn5-6.fna.fbcdn.net/vp/87ec2a72fd662c096fce4d0024469337/5E445124/t51.2885-15/e35/p1080x1080/65552087_169450424097942_7167335723191298006_n.jpg?_nc_ht=instagram.fsgn5-6.fna.fbcdn.net&_nc_cat=106',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imgUrl: 'https://instagram.fsgn5-6.fna.fbcdn.net/vp/fd5adfeff8986c87bff72f0924e2677c/5E57D18C/t51.2885-15/e35/p1080x1080/60492949_436554047121213_4442081705283337166_n.jpg?_nc_ht=instagram.fsgn5-6.fna.fbcdn.net&_nc_cat=109',
                    id: 5,
                    linkUrl: ''
                }
            ]
        }
    }

    render(){
        return(
            <div className = 'directory-menu'>
                {
                    this.state.section.map(({ id, ...sectionProps }) => (
                        <MenuItem
                            key = { id } 
                            {...sectionProps}
                        />
                    ))
                }
            
            </div>
        )
    }


}