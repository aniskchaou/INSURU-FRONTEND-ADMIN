<template>
<form action="https://insura.simcycreative.com/policies" method="POST">
                <input type="hidden" name="_token" value="PUzJTqvuweMAwq6suz9Hrqhd1KbDyZyv8C4Qupq6">
                <div class="ui form">
                    <div class="two fields">
                        <div class="field required">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Produit</font></font></label>
                            <div class="ui fluid search dropdown selection"><select name="product" required="" value="">
                                <option value=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Produit</font></font></option>
                                                                <option value="115"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ASSURANCE INCENDIE</font></font></option>
                                                                <option value="117"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nnnnn</font></font></option>
                                                                <option value="118"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Trest</font></font></option>
                                                                <option value="119"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Couverture anti-feu</font></font></option>
                                                                <option value="122"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RCA</font></font></option>
                                                                <option value="124"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Deux roues </font></font></option>
                                                                <option value="126"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">xfgdfg</font></font></option>
                                                                <option value="127"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Santé</font></font></option>
                                                                <option value="129"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Moter</font></font></option>
                                                                <option value="130"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Maison</font></font></option>
                                                            </select><i class="dropdown icon"></i><input class="search" autocomplete="off" tabindex="0"><div class="text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ASSURANCE INCENDIE</font></font></font></font></div><div class="menu transition hidden" tabindex="-1"><div class="item active selected" data-value="115"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ASSURANCE INCENDIE</font></font></div><div class="item" data-value="117"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nnnnn</font></font></div><div class="item" data-value="118"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Trest</font></font></div><div class="item" data-value="119"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Couverture anti-feu</font></font></div><div class="item" data-value="122"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RCA</font></font></div><div class="item" data-value="124"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Deux roues </font></font></div><div class="item" data-value="126"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">xfgdfg</font></font></div><div class="item" data-value="127"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Santé</font></font></div><div class="item" data-value="129"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Moter</font></font></div><div class="item" data-value="130"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Maison</font></font></div></div></div>
                        </div>
                        <div class="field required">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Type</font></font></label>
                            <div class="ui fluid dropdown selection" tabindex="0"><select name="type" required="" value="">
                                <option value=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Type</font></font></option>
                                <option value="annually"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Annuellement</font></font></option>
                                <option value="monthly"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mensuel</font></font></option>
                                <option value="weekly"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hebdomadaire</font></font></option>
                            </select><i class="dropdown icon"></i><div class="default text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Type</font></font></div><div class="menu" tabindex="-1"><div class="item" data-value="annually"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Annuellement</font></font></div><div class="item" data-value="monthly"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mensuel</font></font></div><div class="item" data-value="weekly"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hebdomadaire</font></font></div></div></div>
                        </div>
                    </div>
                    <div class="two fields">
                        <div class="field required">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Date d'expiration</font></font></label>
                            <div class="ui labeled input">
                                <label for="expiry" class="ui label"><i class="calendar icon"></i></label>
                                <input type="text" id="expiry" class="datepicker" name="expiry" placeholder="Date d'expiration" required="" value="">
                            </div>
                        </div>
                        <div class="field required">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Date de renouvellement</font></font></label>
                            <div class="ui labeled input">
                                <label for="renewal" class="ui label"><i class="calendar icon"></i></label>
                                <input type="text" id="renewal" class="datepicker" name="renewal" placeholder="Date de renouvellement" required="" value="">
                            </div>
                        </div>
                    </div>
                    <div class="field required">
                        <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Payeur de la police</font></font></label>
                        <input type="text" name="payer" maxlength="64" placeholder="Payeur de la politique" required="" value="">
                    </div>
                    <div class="field required">
                        <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Propriétaires de politiques</font></font></label>
                        <div class="dropdown fluid ui selection multiple" tabindex="0"><select name="owners[]" multiple="" required="">
                            <option value=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Propriétaires de politiques</font></font></option>
                                                        <option value="319"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sady Luaxy</font></font></option>
                                                        <option value="321"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">elmakurdu sahya</font></font></option>
                                                        <option value="325"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">hhh hhh</font></font></option>
                                                        <option value="326"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">amit dhakariya</font></font></option>
                                                        <option value="336"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rahat Pappu</font></font></option>
                                                        <option value="347"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fall Abdoulaye</font></font></option>
                                                        <option value="350"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ROSE DIGGS</font></font></option>
                                                        <option value="352"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Innocent MBOYA</font></font></option>
                                                        <option value="355"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dxdcsd dcfsdf</font></font></option>
                                                        <option value="359"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sodais Nasir</font></font></option>
                                                        <option value="360"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jane Doe</font></font></option>
                                                        <option value="361"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Saanjay Yadav</font></font></option>
                                                        <option value="381"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dieu des médias</font></font></option>
                                                        <option value="383"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ttttttttttttttt tttttttttttttttt</font></font></option>
                                                        <option value="384"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">test de test</font></font></option>
                                                        <option value="387"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AAA Abcde</font></font></option>
                                                        <option value="388"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">John Walton</font></font></option>
                                                        <option value="389"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Démo Démo </font></font></option>
                                                        <option value="391"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">test tesy</font></font></option>
                                                        <option value="393"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rahul Deshmukh</font></font></option>
                                                        <option value="395"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Abilash Krishnan</font></font></option>
                                                        <option value="399"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">YohClient YohClient</font></font></option>
                                                        <option value="401"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">YohClient YohClient</font></font></option>
                                                        <option value="405"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">we34234 qwewq</font></font></option>
                                                        <option value="406"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">umshah shshah</font></font></option>
                                                        <option value="412"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">test de test</font></font></option>
                                                        <option value="420"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nathan </font></font></option>
                                                        <option value="428"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vish </font></font></option>
                                                        <option value="434"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jonathan Petit</font></font></option>
                                                        <option value="441"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">triste asd</font></font></option>
                                                        <option value="443"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dipak thakare</font></font></option>
                                                        <option value="444"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Akhona Ngwane</font></font></option>
                                                        <option value="448"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">John Doe</font></font></option>
                                                        <option value="449"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Client zahoor</font></font></option>
                                                        <option value="454"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mathias Oni</font></font></option>
                                                        <option value="460"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Premier client</font></font></option>
                                                        <option value="461"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Abrams Muller</font></font></option>
                                                        <option value="463"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bharat Puri</font></font></option>
                                                        <option value="465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Akash abc</font></font></option>
                                                        <option value="475"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">daniel testname</font></font></option>
                                                        <option value="480"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">alex subira</font></font></option>
                                                        <option value="481"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nom d'utilisateur nom d'utilisateur</font></font></option>
                                                        <option value="486"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jndakzdb zdbjkab</font></font></option>
                                                        <option value="490"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">C1C C1C</font></font></option>
                                                        <option value="491"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Alex Curt</font></font></option>
                                                        <option value="495">Jbbv Jjn</option>
                                                        <option value="502">Stephane Perron</option>
                                                        <option value="503">juan  carlos</option>
                                                        <option value="508">Pankaj Kumar</option>
                                                        <option value="509">karim abd</option>
                                                        <option value="514">demo1 client</option>
                                                        <option value="521">MICHAEL JOHN</option>
                                                        <option value="524">Garry Shilux</option>
                                                        <option value="526">Walter mathonsi</option>
                                                        <option value="531">Fatih Yagin</option>
                                                        <option value="533">Otis Jambaga</option>
                                                        <option value="534">Franta Sádra</option>
                                                        <option value="535">mfadfd mfdsfdsf</option>
                                                        <option value="539">aNIL  cHHETRI</option>
                                                        <option value="541">dddff fff</option>
                                                        <option value="547">Zakaria Albarouni</option>
                                                        <option value="548">Simcy Client</option>
                                                        <option value="555">SAGAR THAKKER</option>
                                                        <option value="558">edwin Test</option>
                                                        <option value="560">Tony tony</option>
                                                        <option value="561">Sherry Jensen</option>
                                                        <option value="564">INARCO&nbsp; </option>
                                                        <option value="567">mohamed osman</option>
                                                        <option value="575">Kumar GOLLA</option>
                                                        <option value="581">Alex Car</option>
                                                        <option value="588">hjgjhg gvjhgjg</option>
                                                        <option value="593">Sureshchandra Joshi</option>
                                                        <option value="598">tttt ttttt</option>
                                                        <option value="600">Elly Wenani</option>
                                                        <option value="605">Maxtor </option>
                                                        <option value="608">gabin wansi</option>
                                                    </select><i class="dropdown icon"></i><div class="default text">Policy owners</div><div class="menu" tabindex="-1"><div class="item" data-value="319">Sady Luaxy</div><div class="item" data-value="321">elmakurdu sahya</div><div class="item" data-value="325">hhh hhh</div><div class="item" data-value="326">amit dhakariya</div><div class="item" data-value="336">Rahat Pappu</div><div class="item" data-value="347">Fall Abdoulaye</div><div class="item" data-value="350">ROSE DIGGS</div><div class="item" data-value="352">Innocent MBOYA</div><div class="item" data-value="355">dxdcsd dcfsdf</div><div class="item" data-value="359">Sodais Nasir</div><div class="item" data-value="360">Jane Doe</div><div class="item" data-value="361">Saanjay Yadav</div><div class="item" data-value="381">god media</div><div class="item" data-value="383">ttttttttttttttt tttttttttttttt</div><div class="item" data-value="384">test test</div><div class="item" data-value="387">AAA Abcde</div><div class="item" data-value="388">John Walton</div><div class="item" data-value="389">Demo  Demo </div><div class="item" data-value="391">tesy test</div><div class="item" data-value="393">Rahul Deshmukh</div><div class="item" data-value="395">Abilash Krishnan</div><div class="item" data-value="399">YohClient YohClient</div><div class="item" data-value="401">YohClient YohClient</div><div class="item" data-value="405">we34234 qwewq</div><div class="item" data-value="406">umshah shshah</div><div class="item" data-value="412">test test</div><div class="item" data-value="420">Nathan </div><div class="item" data-value="428">vish </div><div class="item" data-value="434">Jonathan Petit</div><div class="item" data-value="441">sad asd</div><div class="item" data-value="443">Dipak thakare</div><div class="item" data-value="444">Akhona Ngwane</div><div class="item" data-value="448">John Doe</div><div class="item" data-value="449">zahoor Customer</div><div class="item" data-value="454">Mathias Oni</div><div class="item" data-value="460">First Client</div><div class="item" data-value="461">Abrams Muller</div><div class="item" data-value="463">Bharat Puri</div><div class="item" data-value="465">Akash abc</div><div class="item" data-value="475">daniel testname</div><div class="item" data-value="480">alex subira</div><div class="item" data-value="481">username username</div><div class="item" data-value="486">jndakzdb zdbjkab</div><div class="item" data-value="490">C1C C1C</div><div class="item" data-value="491">Alex Curt</div><div class="item" data-value="495">Jbbv Jjn</div><div class="item" data-value="502">Stephane Perron</div><div class="item" data-value="503">juan  carlos</div><div class="item" data-value="508">Pankaj Kumar</div><div class="item" data-value="509">karim abd</div><div class="item" data-value="514">demo1 client</div><div class="item" data-value="521">MICHAEL JOHN</div><div class="item" data-value="524">Garry Shilux</div><div class="item" data-value="526">Walter mathonsi</div><div class="item" data-value="531">Fatih Yagin</div><div class="item" data-value="533">Otis Jambaga</div><div class="item" data-value="534">Franta Sádra</div><div class="item" data-value="535">mfadfd mfdsfdsf</div><div class="item" data-value="539">aNIL  cHHETRI</div><div class="item" data-value="541">dddff fff</div><div class="item" data-value="547">Zakaria Albarouni</div><div class="item" data-value="548">Simcy Client</div><div class="item" data-value="555">SAGAR THAKKER</div><div class="item" data-value="558">edwin Test</div><div class="item" data-value="560">Tony tony</div><div class="item" data-value="561">Sherry Jensen</div><div class="item" data-value="564">INARCO&nbsp; </div><div class="item" data-value="567">mohamed osman</div><div class="item" data-value="575">Kumar GOLLA</div><div class="item" data-value="581">Alex Car</div><div class="item" data-value="588">hjgjhg gvjhgjg</div><div class="item" data-value="593">Sureshchandra Joshi</div><div class="item" data-value="598">tttt ttttt</div><div class="item" data-value="600">Elly Wenani</div><div class="item" data-value="605">Maxtor </div><div class="item" data-value="608">gabin wansi</div></div></div>
                    </div>
                    <div class="field">
                        <label>Beneficiaries</label>
                        <input type="text" name="beneficiaries" placeholder="Les bénéficiaires" value="">
                    </div>
                    <div class="field">
                        <label>Special remarks</label>
                        <textarea name="special_remarks" placeholder="Remarques spéciales" rows="4"></textarea>
                    </div>
                                        <h5 class="client client319 ui dividing header" style="display:none;">Payment Details for Sady Luaxy</h5>
                    <div class="client client319 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[319]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[319]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client319 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[319]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[319]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client321 ui dividing header" style="display:none;">Payment Details for elmakurdu sahya</h5>
                    <div class="client client321 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[321]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[321]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client321 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[321]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[321]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client325 ui dividing header" style="display:none;">Payment Details for hhh hhh</h5>
                    <div class="client client325 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[325]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[325]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client325 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[325]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[325]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client326 ui dividing header" style="display:none;">Payment Details for amit dhakariya</h5>
                    <div class="client client326 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[326]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[326]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client326 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[326]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[326]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client336 ui dividing header" style="display:none;">Payment Details for Rahat Pappu</h5>
                    <div class="client client336 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[336]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[336]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client336 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[336]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[336]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client347 ui dividing header" style="display:none;">Payment Details for Fall Abdoulaye</h5>
                    <div class="client client347 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[347]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[347]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client347 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[347]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[347]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client350 ui dividing header" style="display:none;">Payment Details for ROSE DIGGS</h5>
                    <div class="client client350 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[350]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[350]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client350 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[350]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[350]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client352 ui dividing header" style="display:none;">Payment Details for Innocent MBOYA</h5>
                    <div class="client client352 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[352]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[352]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client352 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[352]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[352]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client355 ui dividing header" style="display:none;">Payment Details for dxdcsd dcfsdf</h5>
                    <div class="client client355 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[355]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[355]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client355 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[355]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[355]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client359 ui dividing header" style="display:none;">Payment Details for Sodais Nasir</h5>
                    <div class="client client359 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[359]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[359]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client359 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[359]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[359]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client360 ui dividing header" style="display:none;">Payment Details for Jane Doe</h5>
                    <div class="client client360 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[360]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[360]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client360 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[360]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[360]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client361 ui dividing header" style="display:none;">Payment Details for Saanjay Yadav</h5>
                    <div class="client client361 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[361]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[361]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client361 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[361]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[361]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client381 ui dividing header" style="display:none;">Payment Details for god media</h5>
                    <div class="client client381 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[381]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[381]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client381 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[381]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[381]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client383 ui dividing header" style="display:none;">Payment Details for ttttttttttttttt tttttttttttttt</h5>
                    <div class="client client383 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[383]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[383]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client383 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[383]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[383]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client384 ui dividing header" style="display:none;">Payment Details for test test</h5>
                    <div class="client client384 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[384]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[384]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client384 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[384]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[384]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client387 ui dividing header" style="display:none;">Payment Details for AAA Abcde</h5>
                    <div class="client client387 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[387]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[387]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client387 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[387]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[387]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client388 ui dividing header" style="display:none;">Payment Details for John Walton</h5>
                    <div class="client client388 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[388]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[388]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client388 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[388]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[388]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client389 ui dividing header" style="display:none;">Payment Details for Demo  Demo </h5>
                    <div class="client client389 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[389]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[389]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client389 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[389]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[389]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client391 ui dividing header" style="display:none;">Payment Details for tesy test</h5>
                    <div class="client client391 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[391]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[391]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client391 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[391]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[391]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client393 ui dividing header" style="display:none;">Payment Details for Rahul Deshmukh</h5>
                    <div class="client client393 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[393]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[393]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client393 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[393]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[393]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client395 ui dividing header" style="display:none;">Payment Details for Abilash Krishnan</h5>
                    <div class="client client395 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[395]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[395]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client395 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[395]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[395]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client399 ui dividing header" style="display:none;">Payment Details for YohClient YohClient</h5>
                    <div class="client client399 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[399]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[399]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client399 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[399]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[399]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client401 ui dividing header" style="display:none;">Payment Details for YohClient YohClient</h5>
                    <div class="client client401 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[401]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[401]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client401 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[401]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[401]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client405 ui dividing header" style="display:none;">Payment Details for we34234 qwewq</h5>
                    <div class="client client405 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[405]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[405]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client405 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[405]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[405]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client406 ui dividing header" style="display:none;">Payment Details for umshah shshah</h5>
                    <div class="client client406 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[406]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[406]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client406 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[406]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[406]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client412 ui dividing header" style="display:none;">Payment Details for test test</h5>
                    <div class="client client412 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[412]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[412]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client412 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[412]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[412]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client420 ui dividing header" style="display:none;">Payment Details for Nathan </h5>
                    <div class="client client420 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[420]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[420]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client420 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[420]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[420]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client428 ui dividing header" style="display:none;">Payment Details for vish </h5>
                    <div class="client client428 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[428]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[428]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client428 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[428]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[428]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client434 ui dividing header" style="display:none;">Payment Details for Jonathan Petit</h5>
                    <div class="client client434 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[434]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[434]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client434 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[434]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[434]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client441 ui dividing header" style="display:none;">Payment Details for sad asd</h5>
                    <div class="client client441 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[441]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[441]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client441 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[441]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[441]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client443 ui dividing header" style="display:none;">Payment Details for Dipak thakare</h5>
                    <div class="client client443 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[443]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[443]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client443 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[443]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[443]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client444 ui dividing header" style="display:none;">Payment Details for Akhona Ngwane</h5>
                    <div class="client client444 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[444]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[444]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client444 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[444]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[444]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client448 ui dividing header" style="display:none;">Payment Details for John Doe</h5>
                    <div class="client client448 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[448]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[448]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client448 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[448]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[448]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client449 ui dividing header" style="display:none;">Payment Details for zahoor Customer</h5>
                    <div class="client client449 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[449]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[449]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client449 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[449]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[449]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client454 ui dividing header" style="display:none;">Payment Details for Mathias Oni</h5>
                    <div class="client client454 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[454]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[454]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client454 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[454]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[454]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client460 ui dividing header" style="display:none;">Payment Details for First Client</h5>
                    <div class="client client460 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[460]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[460]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client460 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[460]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[460]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client461 ui dividing header" style="display:none;">Payment Details for Abrams Muller</h5>
                    <div class="client client461 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[461]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[461]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client461 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[461]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[461]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client463 ui dividing header" style="display:none;">Payment Details for Bharat Puri</h5>
                    <div class="client client463 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[463]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[463]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client463 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[463]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[463]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client465 ui dividing header" style="display:none;">Payment Details for Akash abc</h5>
                    <div class="client client465 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[465]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[465]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client465 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[465]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[465]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client475 ui dividing header" style="display:none;">Payment Details for daniel testname</h5>
                    <div class="client client475 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[475]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[475]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client475 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[475]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[475]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client480 ui dividing header" style="display:none;">Payment Details for alex subira</h5>
                    <div class="client client480 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[480]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[480]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client480 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[480]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[480]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client481 ui dividing header" style="display:none;">Payment Details for username username</h5>
                    <div class="client client481 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[481]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[481]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client481 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[481]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[481]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client486 ui dividing header" style="display:none;">Payment Details for jndakzdb zdbjkab</h5>
                    <div class="client client486 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[486]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[486]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client486 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[486]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[486]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client490 ui dividing header" style="display:none;">Payment Details for C1C C1C</h5>
                    <div class="client client490 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[490]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[490]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client490 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[490]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[490]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client491 ui dividing header" style="display:none;">Payment Details for Alex Curt</h5>
                    <div class="client client491 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[491]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[491]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client491 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[491]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[491]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client495 ui dividing header" style="display:none;">Payment Details for Jbbv Jjn</h5>
                    <div class="client client495 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[495]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[495]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client495 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[495]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[495]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client502 ui dividing header" style="display:none;">Payment Details for Stephane Perron</h5>
                    <div class="client client502 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[502]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[502]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client502 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[502]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[502]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client503 ui dividing header" style="display:none;">Payment Details for juan  carlos</h5>
                    <div class="client client503 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[503]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[503]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client503 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[503]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[503]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client508 ui dividing header" style="display:none;">Payment Details for Pankaj Kumar</h5>
                    <div class="client client508 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[508]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[508]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client508 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[508]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[508]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client509 ui dividing header" style="display:none;">Payment Details for karim abd</h5>
                    <div class="client client509 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[509]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[509]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client509 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[509]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[509]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client514 ui dividing header" style="display:none;">Payment Details for demo1 client</h5>
                    <div class="client client514 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[514]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[514]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client514 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[514]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[514]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client521 ui dividing header" style="display:none;">Payment Details for MICHAEL JOHN</h5>
                    <div class="client client521 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[521]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[521]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client521 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[521]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[521]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client524 ui dividing header" style="display:none;">Payment Details for Garry Shilux</h5>
                    <div class="client client524 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[524]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[524]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client524 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[524]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[524]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client526 ui dividing header" style="display:none;">Payment Details for Walter mathonsi</h5>
                    <div class="client client526 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[526]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[526]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client526 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[526]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[526]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client531 ui dividing header" style="display:none;">Payment Details for Fatih Yagin</h5>
                    <div class="client client531 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[531]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[531]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client531 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[531]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[531]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client533 ui dividing header" style="display:none;">Payment Details for Otis Jambaga</h5>
                    <div class="client client533 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[533]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[533]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client533 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[533]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[533]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client534 ui dividing header" style="display:none;">Payment Details for Franta Sádra</h5>
                    <div class="client client534 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[534]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[534]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client534 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[534]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[534]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client535 ui dividing header" style="display:none;">Payment Details for mfadfd mfdsfdsf</h5>
                    <div class="client client535 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[535]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[535]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client535 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[535]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[535]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client539 ui dividing header" style="display:none;">Payment Details for aNIL  cHHETRI</h5>
                    <div class="client client539 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[539]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[539]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client539 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[539]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[539]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client541 ui dividing header" style="display:none;">Payment Details for dddff fff</h5>
                    <div class="client client541 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[541]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[541]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client541 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[541]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[541]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client547 ui dividing header" style="display:none;">Payment Details for Zakaria Albarouni</h5>
                    <div class="client client547 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[547]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[547]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client547 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[547]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[547]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client548 ui dividing header" style="display:none;">Payment Details for Simcy Client</h5>
                    <div class="client client548 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[548]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[548]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client548 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[548]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[548]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client555 ui dividing header" style="display:none;">Payment Details for SAGAR THAKKER</h5>
                    <div class="client client555 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[555]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[555]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client555 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[555]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[555]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client558 ui dividing header" style="display:none;">Payment Details for edwin Test</h5>
                    <div class="client client558 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[558]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[558]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client558 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[558]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[558]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client560 ui dividing header" style="display:none;">Payment Details for Tony tony</h5>
                    <div class="client client560 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[560]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[560]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client560 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[560]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[560]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client561 ui dividing header" style="display:none;">Payment Details for Sherry Jensen</h5>
                    <div class="client client561 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[561]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[561]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client561 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[561]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[561]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client564 ui dividing header" style="display:none;">Payment Details for INARCO&nbsp; </h5>
                    <div class="client client564 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[564]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[564]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client564 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[564]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[564]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client567 ui dividing header" style="display:none;">Payment Details for mohamed osman</h5>
                    <div class="client client567 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[567]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[567]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client567 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[567]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[567]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client575 ui dividing header" style="display:none;">Payment Details for Kumar GOLLA</h5>
                    <div class="client client575 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[575]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[575]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client575 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[575]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[575]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client581 ui dividing header" style="display:none;">Payment Details for Alex Car</h5>
                    <div class="client client581 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[581]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[581]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client581 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[581]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[581]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client588 ui dividing header" style="display:none;">Payment Details for hjgjhg gvjhgjg</h5>
                    <div class="client client588 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[588]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[588]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client588 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[588]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[588]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client593 ui dividing header" style="display:none;">Payment Details for Sureshchandra Joshi</h5>
                    <div class="client client593 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label>Premium</label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label">₦</label>
                                <input type="number" id="premium" min="0" name="premium[593]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label>Amount paid</label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label">₦</label>
                                <input type="number" id="amount" name="amount[593]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client593 two fields" style="display:none;">
                        <div class="field">
                            <label>Payment date</label>
                            <input type="text" class="datepicker" name="date[593]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label>Payment method</label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[593]" value="">
                                <div class="default text">Payment Method</div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i>
                                        Card
                                    </div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i>
                                        Cash
                                    </div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i>
                                        PayPal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client598 ui dividing header" style="display:none;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Détails de paiement pour tttt ttttt</font></font></h5>
                    <div class="client client598 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prime</font></font></label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">₦</font></font></label>
                                <input type="number" id="premium" min="0" name="premium[598]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Le montant payé</font></font></label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">₦</font></font></label>
                                <input type="number" id="amount" name="amount[598]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client598 two fields" style="display:none;">
                        <div class="field">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Date de paiement</font></font></label>
                            <input type="text" class="datepicker" name="date[598]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mode de paiement</font></font></label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[598]" value="">
                                <div class="default text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mode de paiement</font></font></div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        Carte
                                    </font></font></div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        En espèces
                                    </font></font></div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        Pay Pal
                                    </font></font></div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client600 ui dividing header" style="display:none;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Détails de paiement pour Elly Wenani</font></font></h5>
                    <div class="client client600 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prime</font></font></label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">₦</font></font></label>
                                <input type="number" id="premium" min="0" name="premium[600]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Le montant payé</font></font></label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">₦</font></font></label>
                                <input type="number" id="amount" name="amount[600]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client600 two fields" style="display:none;">
                        <div class="field">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Date de paiement</font></font></label>
                            <input type="text" class="datepicker" name="date[600]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mode de paiement</font></font></label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[600]" value="">
                                <div class="default text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mode de paiement</font></font></div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        Carte
                                    </font></font></div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        En espèces
                                    </font></font></div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        Pay Pal
                                    </font></font></div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client605 ui dividing header" style="display:none;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Détails de paiement pour Maxtor </font></font></h5>
                    <div class="client client605 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prime</font></font></label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">₦</font></font></label>
                                <input type="number" id="premium" min="0" name="premium[605]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Le montant payé</font></font></label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">₦</font></font></label>
                                <input type="number" id="amount" name="amount[605]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client605 two fields" style="display:none;">
                        <div class="field">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Date de paiement</font></font></label>
                            <input type="text" class="datepicker" name="date[605]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mode de paiement</font></font></label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[605]" value="">
                                <div class="default text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mode de paiement</font></font></div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        Carte
                                    </font></font></div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        En espèces
                                    </font></font></div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        Pay Pal
                                    </font></font></div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <h5 class="client client608 ui dividing header" style="display:none;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Détails de paiement pour Gabin Wansi</font></font></h5>
                    <div class="client client608 two fields" style="display:none;">
                        <div class="field required" data-input-name="premium">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prime</font></font></label>
                            <div class="ui labeled input">
                                <label for="premium" class="ui label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">₦</font></font></label>
                                <input type="number" id="premium" min="0" name="premium[608]" placeholder="Prime" value="">
                            </div>
                        </div>
                        <div class="field">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Le montant payé</font></font></label>
                            <div class="ui labeled input">
                                <label for="amount" class="ui label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">₦</font></font></label>
                                <input type="number" id="amount" name="amount[608]" min="0" placeholder="Le montant payé" value="" max="">
                            </div>
                        </div>
                    </div>
                    <div class="client client608 two fields" style="display:none;">
                        <div class="field">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Date de paiement</font></font></label>
                            <input type="text" class="datepicker" name="date[608]" placeholder="Date de paiement" value="">
                        </div>
                        <div class="field">
                            <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mode de paiement</font></font></label>
                            <div class="ui selection dropdown required" tabindex="0">
                                <input type="hidden" name="method[608]" value="">
                                <div class="default text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mode de paiement</font></font></div>
                                <i class="dropdown icon"></i>
                                <div class="menu" tabindex="-1">
                                    <div class="item" data-value="card">
                                        <i class="credit card alternative icon"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        Carte
                                    </font></font></div>
                                    <div class="item" data-value="cash">
                                        <i class="money icon"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        En espèces
                                    </font></font></div>
                                    <div class="item" data-value="paypal">
                                        <i class="paypal card icon"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                        Pay Pal
                                    </font></font></div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <div class="divider"></div>
                                        <input type="hidden" name="custom_fields[C21F0][label]" value="Premium Type">
                    <input type="hidden" name="custom_fields[C21F0][type]" value="select">
                    <input type="hidden" name="custom_fields[C21F0][uuid]" value="ur41-n5u1-5f6aebbc68aee">
                                                                        <input type="hidden" name="custom_fields[C21F0][value][choices][]" value="Annually">
                                                <input type="hidden" name="custom_fields[C21F0][value][choices][]" value="Half Yearly">
                                                <input type="hidden" name="custom_fields[C21F0][value][choices][]" value="Quarterly">
                                                <input type="hidden" name="custom_fields[C21F0][value][choices][]" value="Monthly">
                                                                            <div class="field">
                        <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Type premium</font></font></label>
                        <div class="ui fluid search dropdown selection"><select name="custom_fields[C21F0][value][choice]">
                            <option value=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Type premium</font></font></option>
                                                            <option value="Annually"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Annuellement</font></font></option>
                                                            <option value="Half Yearly"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Semestriel</font></font></option>
                                                            <option value="Quarterly"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Trimestriel</font></font></option>
                                                            <option value="Monthly"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mensuel</font></font></option>
                                                        </select><i class="dropdown icon"></i><input class="search" autocomplete="off" tabindex="0"><div class="default text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Type premium</font></font></div><div class="menu" tabindex="-1"><div class="item" data-value="Annually"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Annuellement</font></font></div><div class="item" data-value="Half Yearly"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Semestriel</font></font></div><div class="item" data-value="Quarterly"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Trimestriel</font></font></div><div class="item" data-value="Monthly"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mensuel</font></font></div></div></div>
                    </div>
                                                                                            <input type="hidden" name="custom_fields[C21F1][label]" value="Alien#">
                    <input type="hidden" name="custom_fields[C21F1][type]" value="text">
                    <input type="hidden" name="custom_fields[C21F1][uuid]" value="ur41-n5u1-5fd17d2cbc2ae">
                                            <div class="field">
                        <label><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Extraterrestre#</font></font></label>
                        <input type="tel" name="custom_fields[C21F1][value]" value="">
                    </div>
                                                            </div>
            </form>
</template>

<script>
export default {
  name: "Client",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
