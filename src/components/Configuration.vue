<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <strong class="card-title">Paramètres</strong>
      </div>
      <div class="card-body">
        <div className="card">
          
          <div className="card-body">
            <div class="form-group">
              <label for="cc-payment" class="control-label mb-1"
                >Nom entreprise</label
              >
              <input
                id="cc-payment"
                name="cc-payment"
                type="text"
                class="form-control"
                aria-required="true"
                aria-invalid="false"
                value=""
              />
            </div>

            <div class="form-group">
              <label for="cc-payment" class="control-label mb-1"
                >Email entreprise</label
              >
              <input
                id="cc-payment"
                name="cc-payment"
                type="text"
                class="form-control"
                aria-required="true"
                aria-invalid="false"
                value=""
              />
            </div>

            <div class="form-group">
              <label for="cc-payment" class="control-label mb-1"
                >Adresse entreprise</label
              >
              <input
                id="cc-payment"
                name="cc-payment"
                type="text"
                class="form-control"
                aria-required="true"
                aria-invalid="false"
                value=""
              />
            </div>

            <div class="row form-group">
              <div class="col col-md-3">
                <label for="select" class="form-control-label">Langue</label>
              </div>
              <div class="col-12 col-md-9">
                <select name="select" id="select" class="form-control">
                  <option value="0">Please select</option>
                  <option value="1">Francais</option>
                  <option value="2">English</option>
                </select>
              </div>
            </div>

            <div class="row form-group">
              <div class="col col-md-3">
                <label for="select" class="form-control-label">Devise</label>
              </div>
              <div class="col-12 col-md-9">
                <select name="select" id="select" class="form-control">
                  <option value="0">Please select</option>
                  <option value="1">Euro</option>
                  <option value="2">Dollar</option>
                </select>
              </div>
            </div>

            <button
              id="payment-button"
              type="submit"
              class="btn btn-info"
            >
              <i class="fa fa-save fa-lg"></i>&nbsp;
              <span id="payment-button-amount">Enregister</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Configutation",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
