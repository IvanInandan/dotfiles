"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3667],{80670:(e,t,i)=>{i.r(t),i.d(t,{PiPMiniPlayer:()=>Je,TEST_IDS:()=>Ze});var r=i(79474),l=i(97500),n=i.n(l),s=i(23246),a=i(94080),o=i(46757),c=i(89551),u=i(45158);const d="AFZj_hxk7gFsvDDwhsHA",m="UJwngpM5puDW7Frkha4F",x="fZA1mqxFFXYzdoCs87uS",h="hVA5A4j0Jk84rRzVPic6",f="IAd52FjnzrHlY7BuFfXL",g="x34LUemkmouEY9yiADrQ",k="Xu6ZnDJTHWNZ4oCozM1c",p="ktiXGqfcVuegTncUQJim",y="u7pi5kPx9ekghoqH8RcS",C="EzVSQ6md_ZPcpGd373uw",v="xM5DXnNVIBKl0D8KmkKr",j="xZLIxv5s2tm_tmFk3WK8",A="X_fBDy8Kj2NkVB4npQT3",b="kzwtCUYq1juDuoGKeOEJ",w="_BUfOGUEdV4vfOhDWqRv",N="L7VQQwyM5o9cLd2rtIl_",E="yMMglN43dvX2QKTUoivA",S="D0BU1OBnl1EjBDosrWXn",M="tKfqdd6glswVG49yHgiT",R="Hbbk972I34uVuWeqBn2Q",L="C6EYDB6Ad1ITBH4MMhyM",T="xI3ObXOh1ql5ZWoAUyff",B="transparent";var P=i(8469),F=i(60327),V=i(26504),D=i(11533),I=i(69986),_=i(83903),O=i(34131),z=i(89744),H=i(67722),U=i(53326),K=i(93041),W=i(55308),q=i(13274);const X=({item:e,imageUrl:t})=>{const i=(0,H.iz)(e),r=(0,q.jsx)(D._,{className:E,src:t,loading:"eager",testid:Ze.COVER_ART,children:(0,q.jsx)("div",{className:S,children:(0,q.jsx)(V.s,{size:"xlarge",type:e.type,"data-testid":Ze.COVER_ART_PLACEHOLDER})})});return i.url?(0,q.jsx)(U.default,{className:N,to:i.url,children:r}):r},Y=()=>{const{item:e,context:t}=(0,u.L)()??{},i=(0,r.useMemo)((()=>(0,z.h)(e?.images??void 0,{desiredSize:640})),[e?.images,640]),{isPlayingRemotely:l}=(0,_.h)(),s=(0,a.NC)(F.a4n),{isYourDJNarrator:o}=(0,W.Ir)(),c=(0,r.useRef)(null),d=(0,r.useCallback)((()=>{if(!c.current)return;const e=c.current?.children[0];if(!e)return;const{offsetWidth:t,offsetHeight:i}=c.current;let r=Math.min(t,i);r=Math.min(r,640),1===(0,P.D)(e,"--extra-padding",0,"")&&(r-=Math.max(Math.min(.1*r,64),12)),e.width=e.height=r}),[]),m=(0,I.ox)();if((0,r.useEffect)((()=>(m?.addEventListener("resize",d),()=>{m?.removeEventListener("resize",d)})),[d,m]),!e||!t)return null;const x=function(e){return"video"===e.mediaType||"mixed"===e.mediaType}(e),h=(0,O.NE)(e);let f=!x;if(!x||!l&&s||(f=!0),!f)return null;const g=f&&!h&&"showMainWindow"in window;let k;k=o?(0,q.jsx)(K.aU,{}):h?(0,q.jsx)(X,{item:e,imageUrl:i}):(0,q.jsx)(D._,{className:E,src:i,loading:"eager",testid:Ze.COVER_ART,children:(0,q.jsx)("div",{className:S,children:(0,q.jsx)(V.s,{size:"xlarge",type:e.type,"data-testid":Ze.COVER_ART_PLACEHOLDER})})});const p=()=>{g&&window.showMainWindow?.()};return(0,q.jsx)("div",{className:n()(b,{[w]:g}),ref:e=>{c.current=e,d()},role:"button",tabIndex:g?0:-1,onClick:p,onKeyDown:e=>{"Enter"===e.key&&p()},children:k})};i(74926),i(38063);var Q=i(10690),Z=i(39555),J=i(52745),G=i(88514),$=i(37962),ee=i(94389),te=i(19236),ie=i(9658),re=i(55297),le=i(31825);const ne="gXC4vnPDiiiiawwnDN6i",se="HGOZPJuKeigRY5I0vqQw",ae="AZLdtyFhMa1Aqml2YhF2",oe="QfiWYSeXiPwGYmKED38q";const ce=({item:e,onClick:t,className:i})=>{const r=(0,ee.XX)(e),l=(0,O.NE)(e)?r?.title:e.name,s=(0,O.NE)(e)?r?.subtitle:e.name,a=(0,$.K)(),o=function(e){switch(e){case"SMALL":return{title:"bodySmall",subtitle:"marginal"};case"MEDIUM":return{title:"bodyMedium",subtitle:"bodySmall"};default:return{title:"titleSmall",subtitle:"bodySmall"}}}(a.vertical);return(0,q.jsxs)("div",{className:n()(ne,i),children:[(0,q.jsx)("div",{className:se,children:(0,q.jsx)(re.r,{title:l,children:(0,q.jsx)(G.E,{"data-testid":"context-item-info-title",as:"div",variant:o.title,className:se,dir:"auto",children:(0,q.jsx)(ie.R,{item:e,onClick:t,adUrl:r?.url,children:l})})},e.uri)}),(0,q.jsx)(le.l,{className:oe,item:e,size:"DEFAULT"===a.vertical?"small":"xsmall",variant:"DEFAULT"===a.vertical?"bodySmall":"marginal",enableVideoButton:!0}),(0,q.jsx)("div",{className:ae,children:(0,q.jsx)(re.r,{title:s,children:(0,q.jsx)(G.E,{"data-testid":"context-item-info-subtitles",as:"div",variant:o.subtitle,className:ae,semanticColor:"textSubdued",children:(0,q.jsx)(te.n,{item:e,onClick:t})})},e.uri)})]})};var ue=i(18331),de=i(73826),me=i(59771),xe=i(52751);const he="yGrUaUzhqIFvdg5zlVYX",fe="NSayKQ_soKzuAAg2YhAq",ge="eF7BXmqMaY8xVdOtoH1Z",ke="UgnljPH_Vf14LZWb1jBu",pe={title:"bodyMediumBold",subtitle:"bodySmall"},ye={title:"titleSmall",subtitle:"bodyMedium"},Ce=r.memo((()=>{const{openURLWithSessionTransfer:e}=(0,me.L)(),t="SMALL"===(0,$.K)().vertical?pe:ye,i=(0,a.NC)(F.PH),l=(0,xe.D)("loggedin_upgrade_button"),s=(0,r.useCallback)((()=>{e(l(de.M0),"_blank")}),[l,e]);return(0,q.jsx)("div",{className:he,children:(0,q.jsxs)("div",{className:n()("encore-dark-theme","encore-small-devices-theme",{"vertical-metrics":i},fe),children:[(0,q.jsx)(G.E,{variant:t.title,dir:"auto",className:ge,children:c.R.get("web-player.pip-mini-player.upsell.title")}),(0,q.jsx)(G.E,{variant:t.subtitle,semanticColor:"textSubdued",children:c.R.get("web-player.pip-mini-player.upsell.subtitle")}),(0,q.jsx)("div",{className:ke,children:(0,q.jsx)(ue.$,{onClick:s,size:"small",children:c.R.get("web-player.pip-mini-player.upsell.cta-button")})})]})})}));var ve=i(36528),je=i(65804),Ae=i(53808),be=i(20095),we=i(23938),Ne=i(65605);const Ee=()=>(0,q.jsx)("svg",{width:"7",height:"8",viewBox:"0 0 7 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:g,children:(0,q.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.37397 1.94965C6.60829 1.71534 6.60829 1.33544 6.37397 1.10113C6.13966 0.866812 5.75976 0.866812 5.52544 1.10113L3.47461 3.15196L1.42422 1.10157C1.18991 0.86726 0.81001 0.86726 0.575695 1.10158C0.341381 1.33589 0.341381 1.71579 0.575695 1.9501L2.62608 4.00049L0.575696 6.05087C0.341381 6.28519 0.341381 6.66509 0.575696 6.8994C0.81001 7.13372 1.18991 7.13372 1.42422 6.8994L3.47461 4.84902L5.52544 6.89985C5.75976 7.13416 6.13966 7.13416 6.37397 6.89985C6.60829 6.66554 6.60829 6.28564 6.37397 6.05132L4.32314 4.00049L6.37397 1.94965Z",fill:"#912616"})}),Se=r.memo((()=>"SMALL"!==(0,$.K)().vertical?(0,q.jsxs)("svg",{className:h,width:"14",height:"6",viewBox:"0 0 14 6",fill:"none",children:[(0,q.jsx)("circle",{cx:"1",cy:"5",r:"1",transform:"rotate(-90 1 5)",fill:"#A7A7A7"}),(0,q.jsx)("circle",{cx:"1",cy:"1",r:"1",transform:"rotate(-90 1 1)",fill:"#A7A7A7"}),(0,q.jsx)("circle",{cx:"5",cy:"5",r:"1",transform:"rotate(-90 5 5)",fill:"#A7A7A7"}),(0,q.jsx)("circle",{cx:"5",cy:"1",r:"1",transform:"rotate(-90 5 1)",fill:"#A7A7A7"}),(0,q.jsx)("circle",{cx:"9",cy:"5",r:"1",transform:"rotate(-90 9 5)",fill:"#A7A7A7"}),(0,q.jsx)("circle",{cx:"9",cy:"1",r:"1",transform:"rotate(-90 9 1)",fill:"#A7A7A7"}),(0,q.jsx)("circle",{cx:"13",cy:"5",r:"1",transform:"rotate(-90 13 5)",fill:"#A7A7A7"}),(0,q.jsx)("circle",{cx:"13",cy:"1",r:"1",transform:"rotate(-90 13 1)",fill:"#A7A7A7"})]}):(0,q.jsxs)("svg",{className:h,width:"6",height:"12",viewBox:"0 0 6 12",fill:"none",children:[(0,q.jsx)("circle",{cx:"4.5",cy:"10.5",r:"0.75",transform:"rotate(180 4.5 10.5)",fill:"#A7A7A7"}),(0,q.jsx)("circle",{cx:"1.5",cy:"10.5",r:"0.75",transform:"rotate(180 1.5 10.5)",fill:"#A7A7A7"}),(0,q.jsx)("circle",{cx:"4.5",cy:"7.5",r:"0.75",transform:"rotate(180 4.5 7.5)",fill:"#A7A7A7"}),(0,q.jsx)("circle",{cx:"1.5",cy:"7.5",r:"0.75",transform:"rotate(180 1.5 7.5)",fill:"#A7A7A7"}),(0,q.jsx)("circle",{cx:"4.5",cy:"4.5",r:"0.75",transform:"rotate(180 4.5 4.5)",fill:"#A7A7A7"}),(0,q.jsx)("circle",{cx:"1.5",cy:"4.5",r:"0.75",transform:"rotate(180 1.5 4.5)",fill:"#A7A7A7"}),(0,q.jsx)("circle",{cx:"4.5",cy:"1.5",r:"0.75",transform:"rotate(180 4.5 1.5)",fill:"#A7A7A7"}),(0,q.jsx)("circle",{cx:"1.5",cy:"1.5",r:"0.75",transform:"rotate(180 1.5 1.5)",fill:"#A7A7A7"})]}))),Me=({className:e})=>{const{setVideoPlayerUIFlag:t}=(0,Ae.d)(),{onClick:i}=(0,we.D)({}),l=(0,r.useCallback)((()=>{t(Ne.n.documentPip,!1),i()}),[t,i]),s=(0,je.mv)();return(0,q.jsxs)("div",{style:{display:"var(--mini-player-drag-display)"},className:n()(e,x),children:[(0,q.jsx)("button",{className:f,onClick:l,children:s.operatingSystem===be.f.macOS?(0,q.jsx)(Ee,{}):(0,q.jsx)(ve.M,{size:"xsmall",className:g})}),(0,q.jsx)(Se,{}),(0,q.jsx)("div",{className:k})]})};var Re=i(5043),Le=i(98678),Te=i(95456),Be=i(60510),Pe=i(74314),Fe=i(6060),Ve=i(82639),De=i(88289),Ie=i(30520),_e=i(17930),Oe=i(48522);function ze(e){return{itemToBeSkipped:e.item?.uri||"",positionMs:(0,_e.s)(e)??-1,totalContentMs:e.duration??-1}}function He(e){return Math.floor(100*e)}const Ue="E7rR1kkQFoqCTrZAxs8l",Ke="I2v17dp_FDztHzG7CZy9",We="H5VJw6yCxUOoh88LJ42y",qe=r.memo((({item:e,spec:t,logger:i})=>{const l=e.uri,{onClickPlayPause:n,onClickLike:s,onClickSkipPrevious:a,onClickSkipNext:o,onClickRepeat:c,onClickShuffle:u,onClickVolumeButton:d,onClickVolumeBar:m,onDragVolumeBar:x,onClickSeekBack:h,onClickSeekForward:f}=(({uri:e,spec:t,logger:i})=>{const l=(0,r.useRef)(e);l.current=e;const n=(0,Ie.K)(),s=(0,r.useMemo)((()=>t.playerControlsFactory()),[t]),a=(0,r.useCallback)((e=>{let t=null;l.current&&("pause"===e?t=s.playPauseButtonFactory().hitPause({itemToBePaused:l.current}):"resume"===e&&(t=s.playPauseButtonFactory().hitResume({itemToBeResumed:l.current})),t&&i.logInteraction(t))}),[i,s]),o=(0,r.useCallback)((e=>{if(!l.current)return;const t=s.likeButtonFactory(),r=e?t.hitLike({itemToBeLiked:l.current}):t.hitRemoveLike({itemNoLongerLiked:l.current});i.logInteraction(r)}),[i,s]),c=(0,r.useCallback)((()=>{const e=n.getState();if(!e)return;const t=s.previousButtonFactory().hitSkipToPrevious(ze(e));i.logInteraction(t)}),[i,n,s]),u=(0,r.useCallback)((()=>{const e=n.getState();if(!e)return;const t=s.nextButtonFactory().hitSkipToNext(ze(e));i.logInteraction(t)}),[i,n,s]),d=(0,r.useCallback)((e=>{const t=s.repeatButtonFactory();let r=null;switch(e){case O.pM.REPEAT_TRACK:r=t.hitRepeatOneEnable();break;case O.pM.REPEAT_CONTEXT:r=t.hitRepeatEnable();break;case O.pM.REPEAT_NONE:r=t.hitRepeatDisable();break;default:(0,Oe.k)(e)}r&&i.logInteraction(r)}),[i,s]),m=(0,r.useCallback)((e=>{if(!l.current)return;const t=e?"shuffle":"linear",r=e?"linear":"shuffle",n=s.shuffleButtonFactory({uri:l.current}).hitSelectShuffleMode({previousMode:r,selectedMode:t});i.logInteraction(n)}),[i,s]),x=(0,r.useCallback)((e=>{const t=s.volumeMuteButtonFactory();i.logInteraction("muted"===e?t.hitMutePlayback():t.hitUnmutePlayback())}),[i,s]),h=(0,r.useCallback)((e=>{const t=s.volumeBarFactory();i.logInteraction(t.hitSetVolume({newVolumePercentage:He(e)}))}),[i,s]),f=(0,r.useCallback)((e=>{const t=s.volumeBarFactory();i.logInteraction(t.dragSetVolume({newVolumePercentage:He(e)}))}),[i,s]),g=(0,r.useCallback)((e=>{const t=s.seekBackwardButtonFactory();i.logInteraction(t.hitSeekByTime({msSeekedOffset:e}))}),[i,s]);return{onClickSeekForward:(0,r.useCallback)((e=>{const t=s.seekForwardButtonFactory();i.logInteraction(t.hitSeekByTime({msSeekedOffset:e}))}),[i,s]),onClickSeekBack:g,onClickPlayPause:a,onClickLike:o,onClickSkipPrevious:c,onClickSkipNext:u,onClickRepeat:d,onClickShuffle:m,onClickVolumeButton:x,onClickVolumeBar:h,onDragVolumeBar:f}})({uri:l,spec:t,logger:i}),g=(0,$.K)(),k=(0,Le.YQ)(x,500,{leading:!1,trailing:!0});if(!l)return null;const p=(0,Be.v)(e),y=(0,Te.p)(e),C=(0,O.NE)(e),v=function(e){if((0,Te.p)(e)||(0,O.dS)(e))return"audio"===e.mediaType||"mixed"===e.mediaType;return!1}(e),j="SMALL"===g.horizontal,A="SMALL"===g.vertical,b="MEDIUM"===g.vertical;return A?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ve.xJ,{onClick:n}),v||C?(0,q.jsx)(Ve.v3,{onClick:f}):(0,q.jsx)(Ve.$K,{onClick:o})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)("div",{className:Ue,children:[p&&(0,q.jsx)(Fe.b,{uri:l,onClick:s,className:Ke}),y&&(0,q.jsx)(Pe.b,{uri:l,onClick:s,className:Ke})]}),v||C?(0,q.jsx)(Ve.hC,{onClick:h}):(0,q.jsx)(Ve.uP,{onClick:u}),!C&&(0,q.jsx)(Ve.dQ,{onClick:a}),(0,q.jsx)(Ve.xJ,{iconSize:j||b?"small":"medium",onClick:n,className:We}),!C&&(0,q.jsx)(Ve.$K,{onClick:o}),v||C?(0,q.jsx)(Ve.v3,{onClick:f}):(0,q.jsx)(Ve.s_,{onClick:c}),(0,q.jsx)(De.M,{mode:De.V.SHOW_SLIDER_ON_HOVER,sliderSize:80,sliderDirection:"vertical",onToggleMuteClick:d,onVolumeBarClick:m,onVolumeBarDrag:k})]})}));var Xe=i(7680);function Ye(e){if(!e)return null;return{width:e.innerWidth,height:e.innerHeight}}var Qe=i(10327);const Ze={HOVER_CONTAINER:"document-pip-hover-element",COVER_ART:"document-pip-cover-art",COVER_ART_PLACEHOLDER:"document-pip-cover-art-placeholder"},Je=r.memo((()=>{const{item:e,context:t}=(0,u.L)()??{},[i,l]=(0,r.useState)(!1),x=640,h=(0,a.NC)(F.Ln9),f=(0,a.NC)(F.PH),g=(0,r.useMemo)((()=>(0,z.h)(e?.images??void 0,{desiredSize:x})),[e?.images,x]),k=(0,Q.z)(g,B),b=(0,a.NC)(F.a4n);((e,t)=>{const i=(0,Qe.o)((e=>e?.nextItems?.[0]),((e,t)=>e?.uri===t?.uri)),l=(0,r.useMemo)((()=>(0,z.h)(i?.images??void 0,{desiredSize:e})),[i?.images,e]);(0,Q.z)(l,t)})(x,B);const{spec:w,logger:N}=(0,J.r)(o.w,{});(({spec:e,logger:t})=>{const i=(0,I.ox)(),l=(0,r.useRef)(null);null===l.current&&(l.current=Ye(i)),(0,Xe.s)((()=>{const r=Ye(i);null!==r&&null!==l.current&&(t.logInteraction(e.dragUiResize2d({startWidthPx:l.current.width,startHeightPx:l.current.height,endWidthPx:r.width,endHeightPx:r.height})),l.current=r)}),{throttleTime:500,leading:!1,trailing:!0})})({logger:N,spec:w}),(({spec:e,logger:t,pipWindow:i})=>{(0,r.useEffect)((()=>{if(!i)return;const r=r=>{if(r.currentTarget===i){const i=e.windowControlsFactory().closeButtonFactory().hitUiHide();t.logInteraction(i)}};return i.addEventListener("pagehide",r),()=>{i.removeEventListener("pagehide",r)}}),[t,i,e])})({logger:N,spec:w,pipWindow:window.documentPictureInPicture?.window??null});const{setVideoPlayerUIFlag:E}=(0,Ae.d)(),[S,V]=(0,r.useState)("");(0,r.useLayoutEffect)((()=>{V(m)}),[]);const D=function(){const e=(0,I.ox)(),[t,i]=(0,r.useState)(!1);return(0,Xe.s)((()=>{const t=Ye(e);null!==t&&(t.width<=300&&t.height<=300?i(!0):i(!1))}),{throttleTime:500,leading:!1,trailing:!0}),t}();(0,r.useEffect)((()=>{b&&E(Ne.n.documentPip,!0)}),[b,E]);const _=(0,r.useCallback)((e=>{var t;(t=e.target)&&"object"==typeof t&&"nodeName"in t&&"A"===t.nodeName&&"_blank"!==e.target.target&&("showMainWindow"in window?window.showMainWindow?.():l(!0))}),[]);((e,t)=>{const i=(0,I.ox)(),l=t??i;(0,r.useEffect)((()=>{e&&l&&(l.document.title=e)}),[e,l])})(c.R.get("web-player.pip-mini-player.window-title")),(0,r.useEffect)((()=>{if(i){const e=setTimeout((()=>{l(!1)}),3e3);return()=>{clearTimeout(e)}}}),[i]);const H=(0,r.useRef)(null),U=(0,a.NC)(F.HYy),K=(0,Z.t)(w,U),[W,X]=(0,r.useState)(!1),G=(0,r.useRef)(null),$=(0,r.useRef)(null),ee=(0,r.useCallback)((()=>{X(!0),G.current&&clearTimeout(G.current),G.current=setTimeout((()=>{X(!1);const e=(0,P.D)(H.current,"--mouse-active-over-controls-fadeout-timeout",300,"ms");$.current&&clearTimeout($.current),$.current=setTimeout((()=>{$.current=null}),e)}),1e3)}),[]),te=(0,r.useCallback)((()=>{$.current||X(!1)}),[]);if(!e||!t)return null;const ie={"--background-color":k,"--background-image-url":`url(${g})`,"--background-image-width":"640px","--background-image-height":"640px",display:"var(--mini-player-display)"},re=function(e){return"video"===e.mediaType||"mixed"===e.mediaType}(e),le=(0,O.NE)(e);return!h&&!le&&D?(0,q.jsx)(Ce,{}):(0,q.jsxs)("div",{ref:H,className:n()("encore-dark-theme","encore-small-devices-theme",{"vertical-metrics":f},d),style:{"--mini-player-display":"none","--mini-player-drag-display":"none"},children:[(0,q.jsx)(Me,{}),(0,q.jsxs)("div",{className:n()(p,y),style:ie,ref:K,children:[(0,q.jsx)("div",{className:n()(v,{[j]:!re}),"data-testid":"pip-hover-element",children:(0,q.jsx)("div",{className:A,id:"document-pip-main-container",children:(0,q.jsx)(Y,{})})}),(0,q.jsx)(ce,{item:e,className:T,onClick:_}),(0,q.jsx)("div",{className:n()("encore-over-media-set",M,{[L]:W,[R]:!(0,O.NE)(e)}),dir:"ltr","data-testid":Ze.HOVER_CONTAINER,onMouseEnter:ee,onMouseMove:ee,onMouseLeave:te,children:(0,q.jsx)(qe,{item:e,spec:w,logger:N})})]}),(0,q.jsx)("div",{className:S,children:(0,q.jsx)(Re.B,{fadeIn:!1})}),(0,q.jsx)(s.qb,{colorSet:"invertedLight",showSnackbar:i,className:C,children:c.R.get("web-player.pip-mini-player.snackbar.link-opened-in-main-window")})]})}))}}]);
//# sourceMappingURL=xpui-pip-mini-player.js.map