import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e,a as t}from"./app-2f3156d1.js";const l={},p=t(`<h1 id="llapi用法" tabindex="-1"><a class="header-anchor" href="#llapi用法" aria-hidden="true">#</a> LLAPI用法</h1><h2 id="func-llapi-on-new-messages-callback" tabindex="-1"><a class="header-anchor" href="#func-llapi-on-new-messages-callback" aria-hidden="true">#</a> <strong>func</strong> <code>LLAPI.on(&quot;new-messages&quot;, callback)</code></h2><ul><li><p><strong>说明</strong></p><p>监听新消息</p></li><li><p><strong>参数</strong></p><ul><li>callback: 实例函数</li></ul></li><li><p><strong>返回</strong></p><ul><li>message(MessageElement): 消息elements对象</li></ul></li><li><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">LLAPI</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;new-messages&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="func-llapi-on-dom-up-messages-callback" tabindex="-1"><a class="header-anchor" href="#func-llapi-on-dom-up-messages-callback" aria-hidden="true">#</a> <strong>func</strong> <code>LLAPI.on(&quot;dom-up-messages&quot;, callback)</code></h2><ul><li><p><strong>说明</strong></p><p>监听聊天界面消息更新</p></li><li><p><strong>参数</strong></p><ul><li>callback: 实例函数</li></ul></li><li><p><strong>返回</strong></p><ul><li>node: 消息node对象</li></ul></li><li><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">LLAPI</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;dom-up-messages&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="func-llapi-on-context-msg-menu-callback" tabindex="-1"><a class="header-anchor" href="#func-llapi-on-context-msg-menu-callback" aria-hidden="true">#</a> <strong>func</strong> <code>LLAPI.on(&quot;context-msg-menu&quot;, callback)</code></h2><ul><li><p><strong>说明</strong></p><p>监听QQ消息菜单打开事件</p></li><li><p><strong>参数</strong></p><ul><li>callback: 实例函数</li></ul></li><li><p><strong>返回</strong></p><ul><li>event: 右键事件</li><li>target: 右键位置的消息document</li><li>msgIds: 消息ID</li></ul></li><li><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">LLAPI</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;dom-up-messages&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> target<span class="token punctuation">,</span> msgIds</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> target<span class="token punctuation">,</span> msgIds<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="func-llapi-add-editor-message" tabindex="-1"><a class="header-anchor" href="#func-llapi-add-editor-message" aria-hidden="true">#</a> <strong>func</strong> <code>LLAPI.add_editor(message)</code></h2><ul><li><p><strong>说明</strong></p><p>添加消息编辑栏的内容(未完成)</p></li><li><p><strong>参数</strong></p><ul><li>message:</li></ul></li><li><p><strong>返回</strong></p><ul><li></li></ul></li><li><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="func-llapi-set-editor-message" tabindex="-1"><a class="header-anchor" href="#func-llapi-set-editor-message" aria-hidden="true">#</a> <strong>func</strong> <code>LLAPI.set_editor(message)</code></h2><ul><li><p><strong>说明</strong></p><p>设置消息编辑栏的内容</p></li><li><p><strong>参数</strong></p><ul><li>message(string|HTMLElement): 消息内容</li></ul></li><li><p><strong>返回</strong></p><ul><li>(bool): 是否执行成功</li></ul></li><li><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">LLAPI</span><span class="token punctuation">.</span><span class="token function">add_editor</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="func-llapi-add-message-list-peer-message" tabindex="-1"><a class="header-anchor" href="#func-llapi-add-message-list-peer-message" aria-hidden="true">#</a> <strong>func</strong> <code>LLAPI.add_message_list(peer, message)</code></h2><ul><li><p><strong>说明</strong></p><p>添加聊天消息(不保存)(未完成)</p></li><li><p><strong>参数</strong></p><ul><li>peer(Peer): 用户ID对象</li><li>message(string|HTMLElement): 消息内容</li></ul></li><li><p><strong>返回</strong></p><ul><li>(bool): 是否执行成功</li></ul></li><li><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="func-llapi-add-qmenu-callback" tabindex="-1"><a class="header-anchor" href="#func-llapi-add-qmenu-callback" aria-hidden="true">#</a> <strong>func</strong> <code>LLAPI.add_qmenu(callback)</code></h2><ul><li><p><strong>说明</strong></p><p>添加聊天消息(不保存)(未完成)</p></li><li><p><strong>参数</strong></p><ul><li>callback(func): 菜单添加函数</li></ul></li><li><p><strong>返回</strong></p><ul><li>qContextMenu(element): 菜单节点</li></ul></li><li><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">addqmenu</span><span class="token punctuation">(</span><span class="token parameter">qContextMenu</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    qContextMenu<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span><span class="token string">&#39;beforeend&#39;</span><span class="token punctuation">,</span> separatorHTML<span class="token punctuation">)</span>
    qContextMenu<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span><span class="token string">&#39;beforeend&#39;</span><span class="token punctuation">,</span> repeatmsgHTML<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token constant">LLAPI</span><span class="token punctuation">.</span><span class="token function">add_qmenu</span><span class="token punctuation">(</span>addqmenu<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="func-llapi-getaccountinfo" tabindex="-1"><a class="header-anchor" href="#func-llapi-getaccountinfo" aria-hidden="true">#</a> <strong>func</strong> <code>LLAPI.getAccountInfo()</code></h2><ul><li><p><strong>说明</strong></p><p>获取当前用户信息</p></li><li><p><strong>参数</strong></p><ul><li>uid(number): QQ号</li></ul></li><li><p><strong>返回</strong></p><ul><li>AccountInfo: <ul><li>uid(number): uid</li><li>uin(number): uin</li></ul></li></ul></li><li><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> <span class="token constant">LLAPI</span><span class="token punctuation">.</span><span class="token function">getAccountInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="func-llapi-getuserinfo-uid" tabindex="-1"><a class="header-anchor" href="#func-llapi-getuserinfo-uid" aria-hidden="true">#</a> <strong>func</strong> <code>LLAPI.getUserInfo(uid)</code></h2><ul><li><p><strong>说明</strong></p><p>获取当前用户的详细信息</p></li><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>UserInfo: <ul><li>nickName(number): 名称</li><li>age(number): 年龄</li><li>...</li></ul></li></ul></li><li><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> <span class="token constant">LLAPI</span><span class="token punctuation">.</span><span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token number">114514</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="func-llapi-getpeer" tabindex="-1"><a class="header-anchor" href="#func-llapi-getpeer" aria-hidden="true">#</a> <strong>func</strong> <code>LLAPI.getPeer()</code></h2><ul><li><p><strong>说明</strong></p><p>获取当前聊天窗口的Peer</p></li><li><p><strong>参数</strong></p><p>empty</p></li><li><p><strong>返回</strong></p><ul><li>peer(Peer): 用户ID信息</li></ul></li><li><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> <span class="token constant">LLAPI</span><span class="token punctuation">.</span><span class="token function">getPeer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="func-llapi-sendmessage-peer-elements" tabindex="-1"><a class="header-anchor" href="#func-llapi-sendmessage-peer-elements" aria-hidden="true">#</a> <strong>func</strong> <code>LLAPI.sendMessage(peer, elements)</code></h2><ul><li><p><strong>说明</strong></p><p>发送消息</p></li><li><p><strong>参数</strong></p><ul><li>peer(Peer): 用户ID对象</li><li>message(MessageElement): 消息内容</li></ul></li><li><p><strong>返回</strong></p><p>empty</p></li><li><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> elements <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;一条消息&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&quot;FILE_PATH&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">await</span> <span class="token constant">LLAPI</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>peer<span class="token punctuation">,</span> elements<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="func-llapi-forwardmessage-srcpeer-dstpeer-msgids" tabindex="-1"><a class="header-anchor" href="#func-llapi-forwardmessage-srcpeer-dstpeer-msgids" aria-hidden="true">#</a> <strong>func</strong> <code>LLAPI.forwardMessage(srcpeer, dstpeer, msgIds)</code></h2><ul><li><p><strong>说明</strong></p><p>转发消息</p></li><li><p><strong>参数</strong></p><ul><li>srcpeer(Peer): 消息发送对象ID</li><li>dstpeer(Peer): 转发对象ID</li><li>msgIds(list): 消息ID的列表</li></ul></li><li><p><strong>返回</strong></p><p>empty</p></li><li><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> peer <span class="token operator">=</span> <span class="token constant">LLAPI</span><span class="token punctuation">.</span><span class="token function">getPeer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> <span class="token constant">LLAPI</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>peer<span class="token punctuation">,</span> peer<span class="token punctuation">,</span> <span class="token punctuation">[</span>msgId<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="func-llapi-getfriendslist-forced" tabindex="-1"><a class="header-anchor" href="#func-llapi-getfriendslist-forced" aria-hidden="true">#</a> <strong>func</strong> <code>LLAPI.getFriendsList(forced)</code></h2><ul><li><p><strong>说明</strong></p><p>获取好友列表</p></li><li><p><strong>参数</strong></p><ul><li>forced(bool): 是否强制更新</li></ul></li><li><p><strong>返回</strong></p><ul><li>(list): 好友列表</li></ul></li><li><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> <span class="token constant">LLAPI</span><span class="token punctuation">.</span><span class="token function">getFriendsList</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="func-llapi-getgroupslist-forced" tabindex="-1"><a class="header-anchor" href="#func-llapi-getgroupslist-forced" aria-hidden="true">#</a> <strong>func</strong> <code>LLAPI.getGroupsList(forced)</code></h2><ul><li><p><strong>说明</strong></p><p>获取群组列表</p></li><li><p><strong>参数</strong></p><ul><li>forced(bool): 是否强制更新</li></ul></li><li><p><strong>返回</strong></p><ul><li>(list): 群组列表</li></ul></li><li><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> <span class="token constant">LLAPI</span><span class="token punctuation">.</span><span class="token function">getGroupsList</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="func-llapi-getpreviousmessages-peer-count-20-startmsgid-0" tabindex="-1"><a class="header-anchor" href="#func-llapi-getpreviousmessages-peer-count-20-startmsgid-0" aria-hidden="true">#</a> <strong>func</strong> <code>LLAPI.getPreviousMessages(peer, count = 20, startMsgId = &quot;0&quot;)</code></h2><ul><li><p><strong>说明</strong></p><p>获取历史聊天记录</p></li><li><p><strong>参数</strong></p><ul><li>peer(number): 是否强制更新</li><li>count(number): 数量</li><li>startMsgId(string): 起始消息ID</li></ul></li><li><p><strong>返回</strong></p><ul><li>(MessageElement): 消息列表</li></ul></li><li><p><strong>用法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> peer <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token constant">LLAPI</span><span class="token punctuation">.</span><span class="token function">getPeer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> <span class="token constant">LLAPI</span><span class="token punctuation">.</span><span class="token function">getPreviousMessages</span><span class="token punctuation">(</span>peer<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,31);function i(o,c){return s(),a("div",null,[e(`
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-08-19 13:57:11
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-08-30 22:34:39
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
`),p])}const d=n(l,[["render",i],["__file","LLAPI.html.vue"]]);export{d as default};
