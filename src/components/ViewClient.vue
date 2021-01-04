<template>
 <div class="half-page-content">
                        <!-- Client details -->
            <div class="ui segment white fs-16 client-details">
                <div class="segment-header">
                    <h3>Details</h3>
                    <div class="ui right floated successish button top m-w-140 right pointing dropdown" data-inverted="" data-tooltip="More Actions" data-position="left center" tabindex="0">
                        <i class="ion-more icon"></i>
                        <span>More Actions</span>
                        <div class="menu" tabindex="-1">
                            <div class="header">
                                More Actions
                            </div>
                            <div class="divider"></div>
                            <div class="item">
                                <a href="#" data-target="#editClientModal" data-toggle="modal">
                                    <i class="write icon"></i> Edit profile 
                                </a>
                            </div>
                            <div class="item">
                                <a href="https://insura.simcycreative.com/inbox?chatee=321"><i class="comments icon"></i> Chat</a>
                            </div>
                            <form action="https://insura.simcycreative.com/clients/321" class="item negative" method="POST">
                                <input type="hidden" name="_token" value="NK1zAItxHCWXVo9PRUDUpWyF72TC906vmeYcj4Ra">
                                <input type="hidden" name="_method" value="DELETE">
                                <a href="#" class="delete">
                                    <i class="trash icon"></i> Delete 
                                </a>
                            </form>
                            <div class="item">
                                <a href="#" data-target="#newEmailModal" data-toggle="modal">
                                    <i class="mail icon"></i> Send Email 
                                </a>
                            </div>
                            <div class="item">
                                <a href="#" data-target="#newTextModal" data-toggle="modal">
                                    <i class="comment icon"></i> Send Text 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="policy-details">
                    <div class="row">
                        <div class="col-sm-3 col-md-4">
                            <span>Name</span>
                            <p>elmakurdu sahya</p>
                        </div>
                        <div class="col-sm-5 col-md-4">
                            <span>Policies</span>
                            <p>7</p>
                        </div>
                        <div class="col-sm-4 col-md-4">
                                                    </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 col-md-4">
                            <span>Email</span>
                            <p>admin@admin.com</p>
                        </div>
                        <div class="col-sm-8 col-md-4">
                            <span>Birthday</span>
                            <p>7th November 2019</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 col-md-4">
                            <span>Phone</span>
                            <p>+902125454744</p>
                        </div>
                        <div class="col-sm-4 col-md-4">
                            <span>Address</span>
                            <p>Merkez Mah.672 sokak Kayaoğlu İş Merkezi No.1 Kat :3 Bağcılar /İstanbul</p>
                        </div>
                    </div>

                    <div class="divider"></div>

                    <div class="row">
                                            </div>
                </div>
            </div>
            <!-- end client details -->

            <!-- notes -->
            <div class="ui segment white fs-16">
                <div class="segment-header">
                    <h3>Notes to elmakurdu</h3>
                    <button class="ui right floated button successish m-w-140" data-target="#newNoteModal" data-toggle="modal">Write note</button>
                </div>
                <table class="ui celled striped table">
                    <thead>
                        <tr>
                            <th> From </th>
                            <th> Message </th>
                            <th> Date </th>
                            <th class="center aligned"> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                                               <tr>
                            <td>You</td>
                            <td class="text-ellipsis">deneme notu
&lt;br/&gt;</td>
                            <td>June 12, 2020</td>
                            <td class="center aligned">
                                <a href="#" class="ui tiny grey label" data-target="#readNote50Modal" data-toggle="modal"> Read </a>
                                <form action="https://insura.simcycreative.com/notes/50" class="delete-note" method="POST" style="display:inline;">
                                    <input type="hidden" name="_token" value="NK1zAItxHCWXVo9PRUDUpWyF72TC906vmeYcj4Ra">
                                    <input type="hidden" name="_method" value="DELETE">
                                    <button href="#" class="ui red tiny label delete" style="cursor:pointer;" type="submit"> Delete </button>
                                </form>
                            </td>
                        </tr>
                                                <tr>
                            <td>You</td>
                            <td class="text-ellipsis">Mene kal isse baat kara
&lt;br/&gt;</td>
                            <td>August 04, 2020</td>
                            <td class="center aligned">
                                <a href="#" class="ui tiny grey label" data-target="#readNote54Modal" data-toggle="modal"> Read </a>
                                <form action="https://insura.simcycreative.com/notes/54" class="delete-note" method="POST" style="display:inline;">
                                    <input type="hidden" name="_token" value="NK1zAItxHCWXVo9PRUDUpWyF72TC906vmeYcj4Ra">
                                    <input type="hidden" name="_method" value="DELETE">
                                    <button href="#" class="ui red tiny label delete" style="cursor:pointer;" type="submit"> Delete </button>
                                </form>
                            </td>
                        </tr>
                                                <tr>
                            <td>You</td>
                            <td class="text-ellipsis">Test</td>
                            <td>December 15, 2020</td>
                            <td class="center aligned">
                                <a href="#" class="ui tiny grey label" data-target="#readNote59Modal" data-toggle="modal"> Read </a>
                                <form action="https://insura.simcycreative.com/notes/59" class="delete-note" method="POST" style="display:inline;">
                                    <input type="hidden" name="_token" value="NK1zAItxHCWXVo9PRUDUpWyF72TC906vmeYcj4Ra">
                                    <input type="hidden" name="_method" value="DELETE">
                                    <button href="#" class="ui red tiny label delete" style="cursor:pointer;" type="submit"> Delete </button>
                                </form>
                            </td>
                        </tr>
                                                <tr>
                            <td>You</td>
                            <td class="text-ellipsis">dd</td>
                            <td>December 29, 2020</td>
                            <td class="center aligned">
                                <a href="#" class="ui tiny grey label" data-target="#readNote60Modal" data-toggle="modal"> Read </a>
                                <form action="https://insura.simcycreative.com/notes/60" class="delete-note" method="POST" style="display:inline;">
                                    <input type="hidden" name="_token" value="NK1zAItxHCWXVo9PRUDUpWyF72TC906vmeYcj4Ra">
                                    <input type="hidden" name="_method" value="DELETE">
                                    <button href="#" class="ui red tiny label delete" style="cursor:pointer;" type="submit"> Delete </button>
                                </form>
                            </td>
                        </tr>
                                            </tbody>
                </table>
            </div>
            <!-- end notes -->

            <!-- attachments -->
            <div class="ui segment white fs-16">
                <div class="segment-header">
                    <h3>Attachments</h3>
                    <button class="ui right floated button successish m-w-140" data-target="#newAttachmentModal" data-toggle="modal">New Attachment</button>
                </div>
                <table class="ui celled striped table">
                    <thead>
                        <tr>
                            <th> File Name </th>
                            <th> Date </th>
                            <th> Uploaded By </th>
                            <th class="center aligned"> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                                                <tr>
                            <td>
                                <i class="file image outline icon"></i> Aadhar Card
                            </td>
                            <td>August 04, 2020</td>
                            <td>Demo User</td>
                            <td class="center aligned">
                                <a href="https://insura.simcycreative.com/uploads/attachments/xxnutNHRmo.jpg" class="ui tiny grey label" target="_blank"> View </a>
                                <form action="https://insura.simcycreative.com/attachments/61" class="delete-attachment" method="POST" style="display:inline;">
                                    <input type="hidden" name="_token" value="NK1zAItxHCWXVo9PRUDUpWyF72TC906vmeYcj4Ra">
                                    <input type="hidden" name="_method" value="DELETE">
                                    <button class="delete label tiny red ui" style="cursor:pointer;" type="submit">Delete</button>
                                </form>
                            </td>
                        </tr>
                                            </tbody>
                </table>
            </div>
            <!-- end attachments -->

            <!-- policies -->
            <div class="ui segment white">
                <div class="segment-header">
                    <h3>Policies</h3>
                    <button class="ui right floated button successish m-w-140" data-target="#newPolicyModal" data-toggle="modal">New Policy</button>
                </div>
                <table class="ui table">
                    <thead>
                        <tr>
                            <th>Ref No.</th>
                            <th>Product</th>
                            <th>Insurer</th>
                            <th>Premium</th>
                            <th>Due</th>
                            <th class="center aligned">Status</th>
                            <th class="center aligned">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                                                <tr class="positive">
                            <td>HFLBMEKU</td>
                            <td class="text-ellipsis">FIRE INSURANCE</td>
                            <td>Rajpal Sir</td>
                            <td>₦343</td>
                            <td>₦0</td>
                            <td class="center aligned">
                                                                <div class="ui green mini label"> Paid</div>
                                                            </td>
                            <td class="center aligned">
                                <a class="ui mini grey label" href="https://insura.simcycreative.com/policies/373"> View </a>
                            </td>
                        </tr>
                                                <tr class="positive">
                            <td>JZGUI5KD</td>
                            <td class="text-ellipsis">Two Wheeler </td>
                            <td>MisPay Insurance</td>
                            <td>₦2400</td>
                            <td>₦0</td>
                            <td class="center aligned">
                                                                <div class="ui green mini label"> Paid</div>
                                                            </td>
                            <td class="center aligned">
                                <a class="ui mini grey label" href="https://insura.simcycreative.com/policies/389"> View </a>
                            </td>
                        </tr>
                                                <tr class="positive">
                            <td>TYUG7B8P</td>
                            <td class="text-ellipsis">FIRE INSURANCE</td>
                            <td>Rajpal Sir</td>
                            <td>₦54</td>
                            <td>₦0</td>
                            <td class="center aligned">
                                                                <div class="ui green mini label"> Paid</div>
                                                            </td>
                            <td class="center aligned">
                                <a class="ui mini grey label" href="https://insura.simcycreative.com/policies/397"> View </a>
                            </td>
                        </tr>
                                                <tr class="negative">
                            <td>DR8VBIJW</td>
                            <td class="text-ellipsis">Fire Cover</td>
                            <td>Juee</td>
                            <td>₦24</td>
                            <td>₦24</td>
                            <td class="center aligned">
                                                                <div class="ui red mini label"> Unpaid</div>
                                                            </td>
                            <td class="center aligned">
                                <a class="ui mini grey label" href="https://insura.simcycreative.com/policies/399"> View </a>
                            </td>
                        </tr>
                                                <tr class="positive">
                            <td>QS6NAQXD</td>
                            <td class="text-ellipsis">Health</td>
                            <td>CHANAS</td>
                            <td>₦100</td>
                            <td>₦0</td>
                            <td class="center aligned">
                                                                <div class="ui green mini label"> Paid</div>
                                                            </td>
                            <td class="center aligned">
                                <a class="ui mini grey label" href="https://insura.simcycreative.com/policies/412"> View </a>
                            </td>
                        </tr>
                                                <tr class="negative">
                            <td>TSSZLVNN</td>
                            <td class="text-ellipsis">FIRE INSURANCE</td>
                            <td>Rajpal Sir</td>
                            <td>₦10</td>
                            <td>₦7</td>
                            <td class="center aligned">
                                                                <div class="ui orange mini label"> Partial</div>
                                                            </td>
                            <td class="center aligned">
                                <a class="ui mini grey label" href="https://insura.simcycreative.com/policies/425"> View </a>
                            </td>
                        </tr>
                                                <tr class="warning">
                            <td>BB3ADYCC</td>
                            <td class="text-ellipsis">Health</td>
                            <td>CHANAS</td>
                            <td>₦14222</td>
                            <td>₦13556</td>
                            <td class="center aligned">
                                                                <div class="ui orange mini label"> Partial</div>
                                                            </td>
                            <td class="center aligned">
                                <a class="ui mini grey label" href="https://insura.simcycreative.com/policies/430"> View </a>
                            </td>
                        </tr>
                                            </tbody>
                    <tfoot>
                        <tr>
                            <th>Totals</th>
                            <th></th>
                            <th></th>
                            <th>₦17153</th>
                            <th>₦13587</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <!-- end policies -->

            <!-- payments -->
            <div class="ui segment white">
                <div class="segment-header">
                    <h3>Payments</h3>
                    <button class="ui right floated button successish m-w-140" data-target="#newPaymentModal" data-toggle="modal">New Payment</button>
                </div>
                <table class="ui striped table">
                    <thead>
                        <tr>
                            <th>#No</th>
                            <th>Policy</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Method</th>
                        </tr>
                    </thead>
                    <tbody>
                                                <tr>
                            <td>1</td>
                            <td>HFLBMEKU</td>
                            <td>₦20</td>
                            <td>July 22, 2020</td>
                            <td>
                                <i class="money icon"></i> Cash
                            </td>
                        </tr>
                                                <tr>
                            <td>2</td>
                            <td>HFLBMEKU</td>
                            <td>₦323</td>
                            <td>August 27, 2020</td>
                            <td>
                                <i class="credit card alternative icon"></i> Card
                            </td>
                        </tr>
                                                <tr>
                            <td>3</td>
                            <td>JZGUI5KD</td>
                            <td>₦2400</td>
                            <td>August 07, 2020</td>
                            <td>
                                <i class="money icon"></i> Cash
                            </td>
                        </tr>
                                                <tr>
                            <td>4</td>
                            <td>TYUG7B8P</td>
                            <td>₦41</td>
                            <td>September 30, 2020</td>
                            <td>
                                <i class="money icon"></i> Cash
                            </td>
                        </tr>
                                                <tr>
                            <td>5</td>
                            <td>QS6NAQXD</td>
                            <td>₦100</td>
                            <td>October 28, 2020</td>
                            <td>
                                <i class="money icon"></i> Cash
                            </td>
                        </tr>
                                                <tr>
                            <td>6</td>
                            <td>TYUG7B8P</td>
                            <td>₦13</td>
                            <td>November 20, 2020</td>
                            <td>
                                <i class="credit card alternative icon"></i> Card
                            </td>
                        </tr>
                                                <tr>
                            <td>7</td>
                            <td>TSSZLVNN</td>
                            <td>₦3</td>
                            <td>November 24, 2020</td>
                            <td>
                                <i class="money icon"></i> Cash
                            </td>
                        </tr>
                                                <tr>
                            <td>8</td>
                            <td>BB3ADYCC</td>
                            <td>₦666</td>
                            <td>December 03, 2020</td>
                            <td>
                                <i class="paypal card icon"></i> PayPal
                            </td>
                        </tr>
                                            </tbody>
                </table>
            </div>
            <!-- end payments -->
        </div>
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
