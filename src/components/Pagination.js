import React from 'react';
import {NavLink} from 'react-router-dom';
import ArrowImg from './styles/ArrowImg';
import ArrowBar from './styles/ArrowBar';
import PageButton from './styles/PageButton';
import forwardArrow from '../images/next.png'
import backArrow from '../images/back.png'



const Pagination = props => {
    const changePage = forward => forward ? props.setPage(Number(props.page) + 1) : (Number(props.page) > 1 ? props.setPage(Number(props.page) - 1) : null);
    return (
        <ArrowBar>
            <NavLink to={`/characters/?page=${Number(props.page) > 1 ? Number(props.page) - 1 : 1}`}><PageButton onClick = {() => changePage(false)}><ArrowImg src={backArrow} /></PageButton></NavLink>
            <h3>Page {props.page}</h3>
            <NavLink to={`/characters/?page=${Number(props.page) + 1}`}><PageButton onClick = {() => changePage(true)}><ArrowImg src={forwardArrow} /></PageButton></NavLink>
        </ArrowBar>
    );
};

export default Pagination;