import styled from "styled-components";
const HomeWrapper = styled.div`
.logo{
    width: 70px;
}
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    z-index: 999;
}
.header-ul{
    display: flex;
    li{
        margin: 0 5px ;
    }
}
.my-modal-on{
    width: 100%;
    height: 500px;
    background-color: #dfdfdf;
    position: relative;
    top: 0px;
    transition: 0.5s;
    z-index: 0;
}
.my-modal-off{
    position: relative;
    top: -500px;
    transition: 0.5s;
    z-index: 0;
}
.visible-hidden {
    visibility: hidden;
}
.cursor-pointer{
    cursor: pointer;
}
.cursor-pointer{
    cursor: pointer;
}
`
export default HomeWrapper;