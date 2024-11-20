"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[3955],{2126:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(5893),o=t(1151);const i={},s="Migrating from FreeNAS",a={id:"further-configuration/migrating-from-freenas",title:"Migrating from FreeNAS",description:"FreeNAS uses ZFS as it's core storage filesystem. ZFS on Linux is supported natively in Ubuntu, so importing FreeNAS zpools is easy.",source:"@site/docs/further-configuration/migrating-from-freenas.md",sourceDirName:"further-configuration",slug:"/further-configuration/migrating-from-freenas",permalink:"/docs/further-configuration/migrating-from-freenas",draft:!1,unlisted:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/further-configuration/migrating-from-freenas.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hardware",permalink:"/docs/further-configuration/hardware"},next:{title:"NFS Exports",permalink:"/docs/further-configuration/nfs-exports"}},c={},l=[];function u(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"migrating-from-freenas",children:"Migrating from FreeNAS"}),"\n",(0,r.jsxs)(n.p,{children:["FreeNAS uses ZFS as it's core storage filesystem. ",(0,r.jsx)(n.a,{href:"https://zfsonlinux.org/",children:"ZFS on Linux"})," is supported natively in Ubuntu, so importing FreeNAS zpools is easy."]}),"\n",(0,r.jsx)(n.p,{children:"Once you have an Ubuntu Server installation up and running:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure you have a working backup of your FreeNAS data."}),"\n",(0,r.jsx)(n.li,{children:"Check that the working backup you think you have actually works."}),"\n",(0,r.jsx)(n.li,{children:"Shut down your Ubuntu Server, connect the disks, start it back up."}),"\n",(0,r.jsxs)(n.li,{children:["SSH to the server and run ",(0,r.jsx)(n.code,{children:"zpool list"})," to determine available ZFS pools."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"zpool import <pool_name>"})," against each of the pools you want to attach."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chown -R root:root /mnt/<pool_name>"})," to fix the ownership of the data."]}),"\n",(0,r.jsxs)(n.li,{children:["Update your Ansible-NAS configuration to reflect the paths of the ZFS zpools. You'll likely want to point ",(0,r.jsx)(n.code,{children:"docker_home"})," at your ZFS zpools."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(7294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);