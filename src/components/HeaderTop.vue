<template>
  <div
    class="sidebar"
    :class="isOpened ? 'open' : ''"
    :style="cssVars"
  >
    <div
      class="logo-details"
      style="margin: 6px 14px 0 14px"
    >
      <img
        v-if="menuLogo"
        :src="menuLogo"
        alt="menu-logo"
        class="menu-logo icon"
      >
      <i
        v-else
        class="bx icon"
        :class="menuIcon"
      />
      <div class="logo_name">
        {{ menuTitle }}
      </div>
      <i
        class="bx"
        :class="isOpened ? 'bx-menu-alt-right' : 'bx-menu'"
        id="btn"
        @click="isOpened = !isOpened"
      />
    </div>

    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        max-height: calc(100% - 60px);
      "
    >
      <div
        id="my-scroll"
        style="margin: 6px 14px 0 14px"
      >
        <ul
          class="nav-list"
          style="overflow: visible"
        >
        

          <li
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :id="'links_' + index"
            :class="{ 'customer-tab': menuItem.name === 'Customer' }"
            
          >
            <router-link
              v-if="isUsedVueRouter"
              :to="menuItem.link"
            >
              <i
                class="bx"
                :class="menuItem.icon || 'bx-square-rounded'"
              />
              <span class="links_name">{{ menuItem.name }}</span>
            </router-link>
            <a
              v-else
              @click.stop.prevent="$emit('menuItemClcked', menuItem.link)"
              :href="menuItem.link"
            >
              <i
                class="bx"
                :class="menuItem.icon || 'bx-square-rounded'"
                
              />
              <span class="links_name">{{ menuItem.name }}</span>

              <i
                class="bx"
                :class="menuItem.arrow"
                style="margin-left: auto;"
              />
            </a>
            <span
              :data-target="'links_' + index"
              class="tooltip"
            >{{
              menuItem.tooltip || menuItem.name
            }}</span>
          </li>
        </ul>
      </div>

      <div
        v-if="isLoggedIn"
        class="profile"
      >
        <div class="profile-details">
          <img
            v-if="profileImg"
            :src="profileImg"
            alt="profileImg"
          >
          <i
            v-else
            class="bx bxs-user-rectangle"
          />
          <div class="name_job">
            <div class="name">
              {{ profileName }}
            </div>
            <div class="job">
              {{ profileRole }}
            </div>
          </div>
        </div>
        <i
          v-if="isExitButton"
          class="bx bx-log-out"
          id="log_out"
          @click.stop="$emit('button-exit-clicked')"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SidebarMenu',
    props: {
     
      isMenuOpen: {
        type: Boolean,
        default: true,
      },
      isUsedVueRouter: {
        type: Boolean,
        default: false,
      },
      menuTitle: {
        type: String,
        default: 'Dashboard',
      },
      menuLogo: {
        type: String,
        default: '',
      },
      menuIcon: {
        type: String,
        default: 'bx bx-disc',
      },
      isPaddingLeft: {
        type: Boolean,
        default: true,
      },
      menuOpenedPaddingLeftBody: {
        type: String,
        default: '250px',
      },
      menuClosedPaddingLeftBody: {
        type: String,
        default: '78px',
      },

      //! Menu items
      menuItems: {
        type: Array,
        default: () => [
          {
            link: '#',
            name: 'Dashboard',
            tooltip: 'Dashboard',
            icon: 'bx-grid-alt',
          },
          {
            link: '#',
            name: 'Product',
            tooltip: 'Product',
            icon: 'bx-box',
            arrow: 'bx bx-chevron-right'
          },
          {
            link: '#',
            name: 'Customer',
            tooltip: 'Customer',
            icon: 'bx-user',
            arrow: 'bx bx-chevron-right'
          },
          {
            link: '#',
            name: 'Income',
            tooltip: 'Income',
            icon: 'bx-money',
            arrow: 'bx bx-chevron-right'
          },
          {
            link: '#',
            name: 'Promote',
            tooltip: 'Promote',
            icon: 'bx-cookie',
            arrow: 'bx bx-chevron-right'
          },
          {
            link: '#',
            name: 'Help',
            tooltip: 'Help',
            icon: 'bx bx-message-alt-error',
            arrow: 'bx bx-chevron-right'
          },
 
        ],
      },

      bgColor: {
        type: String,
        default: '#fff',
      },
      secondaryColor: {
        type: String,
        default: '#1d1b31',
      },
      homeSectionColor: {
        type: String,
        default: '#e4e9f7',
      },
      logoTitleColor: {
        type: String,
        default: '#000',
      },
      iconsColor: {
        type: String,
        default: '#000',
      },
      itemsTooltipColor: {
        type: String,
        default: '#e4e9f7',
      },
   
      menuItemsHoverColor: {
        type: String,
        default: 'blue',
      },
      menuItemsTextColor: {
        type: String,
        default: '#000',
      },
      menuFooterTextColor: {
        type: String,
        default: '#000',
      },
    },
    data() {
      return {
        isOpened: false,
      }
    },
    mounted() {
      this.isOpened = this.isMenuOpen
      this.tooltipAttached()
    },
    computed: {
      cssVars() {
        return {
          // '--padding-left-body': this.isOpened ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody,
          '--bg-color': this.bgColor,
          '--secondary-color': this.secondaryColor,
          '--home-section-color': this.homeSectionColor,
          '--logo-title-color': this.logoTitleColor,
          '--icons-color': this.iconsColor,
          '--items-tooltip-color': this.itemsTooltipColor,
  
          '--menu-items-hover-color': this.menuItemsHoverColor,
          '--menu-items-text-color': this.menuItemsTextColor,
          '--menu-footer-text-color': this.menuFooterTextColor,
        }
      },
    },
    watch: {
      isOpened(val) {
        window.document.body.style.paddingLeft =
          this.isOpened && this.isPaddingLeft
            ? this.menuOpenedPaddingLeftBody
            : this.menuClosedPaddingLeftBody
      },
    },
    methods: {
      selectCustomer(index) {
    // Assuming you have a property like selectedCustomer to track the selected customer
    this.$emit('customerSelected', index); // Emit an event to inform the parent component
  },
      tooltipAttached() {
        const tooltips = document.querySelectorAll('.tooltip')
        tooltips.forEach(tooltip => {
          document.body.appendChild(tooltip)
        })
        document.querySelectorAll('.tooltip').forEach(tooltip => {
          const targetID = tooltip.dataset.target
          const target = document.querySelector(`#${targetID}`)
          if (!target) return
          target.addEventListener('mouseenter', () => {
            const targetPosition = target.getBoundingClientRect()
            if (this.isOpened) return
            tooltip.style.top = `${targetPosition.top + window.scrollY}px`
            tooltip.style.left = `${
              targetPosition.left + targetPosition.width + 20
            }px`
            tooltip.classList.add('active')
          })
          target.addEventListener('mouseleave', () => {
            tooltip.classList.remove('active')
          })
        })
      },
    },
  }
</script>

<style>
  /* Google Font Link */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
  @import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    
  }
  body {
    transition: all 0.5s ease;
  }
  .name_job {
    margin-bottom: 5px;
  }
  .menu-logo {
    width: 30px;
    margin: 0 10px 0 10px;
  }
  .sidebar {
    /* position: relative;
    display: flex !important; */
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    min-height: min-content;
    /* overflow-y: auto; */
    width: 78px;
    background: var(--bg-color);
    /* padding: 6px 14px 0 14px; */
    z-index: 99;
    transition: all 0.5s ease;
  }
  .sidebar.open {
    width: 250px;
  }
  .sidebar .logo-details {
    height: 60px;
    display: flex !important;
    align-items: center;
    position: relative;
  }
  .sidebar .logo-details .icon {
    opacity: 0;
    transition: all 0.5s ease;
  }
  .sidebar .logo-details .logo_name {
    color: var(--logo-title-color);
    font-size: 20px;
    font-weight: 600;
    opacity: 0;
    transition: all 0.5s ease;
  }
  .sidebar.open .logo-details .icon,
  .sidebar.open .logo-details .logo_name {
    opacity: 1;
  }
  .sidebar .logo-details #btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 22px;
    transition: all 0.4s ease;
    font-size: 23px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  .sidebar.open .logo-details #btn {
    text-align: right;
  }
  .sidebar i {
    color: var(--icons-color);
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
  }
  .sidebar .nav-list {
    margin-top: 20px;
    /* margin-bottom: 60px; */
    /* height: 100%; */
    /* min-height: min-content; */
  }
  .sidebar li {
    position: relative;
    margin: 8px 0;
    list-style: none;
  }
  .tooltip {
    position: absolute;
    /* top: -20px; */
    /* left: calc(100% + 15px); */
    z-index: 3;
    background: var(--items-tooltip-color);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;
  }
  .tooltip.active {
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
    /* top: 50%; */
    transform: translateY(25%);
  }
  .sidebar.open li .tooltip {
    display: none;
  }
  .sidebar input {
    font-size: 15px;
    color: var(--serach-input-text-color);
    font-weight: 400;
    outline: none;
    height: 50px;
    width: 100%;
    width: 50px;
    border: none;
    border-radius: 12px;
    transition: all 0.5s ease;
    background: var(--secondary-color);
  }
  .sidebar.open input {
    padding: 0 20px 0 50px;
    width: 100%;
  }

  .sidebar li a {
    display: flex !important;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: var(--bg-color);
  }
  .sidebar li a:hover {
    background: var(--menu-items-hover-color);
  }
  .sidebar li a .links_name {
    color: var(--menu-items-text-color);
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: 0.4s;
  }
  .sidebar.open li a .links_name {
    opacity: 1;
    pointer-events: auto;
  }
  .sidebar li a:hover .links_name,
  .sidebar li a:hover i {
    transition: all 0.5s ease;
    color: var(--bg-color);
  }
  .sidebar li router-link {
    display: flex !important;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: var(--bg-color);
  }
  .sidebar li router-link:hover {
    background: var(--menu-items-hover-color);
  }
  .sidebar li router-link .links_name {
    color: var(--menu-items-text-color);
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: 0.4s;
  }
  .sidebar.open li router-link .links_name {
    opacity: 1;
    pointer-events: auto;
  }
  .sidebar li router-link:hover .links_name,
  .sidebar li router-link:hover i {
    transition: all 0.5s ease;
    color: var(--bg-color);
  }
  .sidebar li i {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-radius: 12px;
  }
  .sidebar div.profile {
    position: relative;
    height: 60px;
    width: 78px;
    /* left: 0;
    bottom: 0; */
    padding: 10px 14px;
    background: var(--secondary-color);
    transition: all 0.5s ease;
    overflow: hidden;
  }
  .sidebar.open div.profile {
    width: 250px;
  }
  .sidebar div .profile-details {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }
  .sidebar div img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 10px;
  }
  .sidebar div.profile .name,
  .sidebar div.profile .job {
    font-size: 15px;
    font-weight: 400;
    color: var(--menu-footer-text-color);
    white-space: nowrap;
  }
  .sidebar div.profile .job {
    font-size: 12px;
  }
  .sidebar .profile #log_out {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: var(--secondary-color);
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-radius: 0px;
    transition: all 0.5s ease;
  }
  .sidebar.open .profile #log_out {
    width: 50px;
    background: var(--secondary-color);
    opacity: 0;
  }
  .sidebar.open .profile:hover #log_out {
    opacity: 1;
  }
  .sidebar.open .profile #log_out:hover {
    opacity: 1;
    color: red;
  }
  .sidebar .profile #log_out:hover {
    color: red;
  }
  .home-section {
    position: relative;
    background: var(--home-section-color);
    min-height: 100vh;
    top: 0;
    left: 78px;
    width: calc(100% - 78px);
    transition: all 0.5s ease;
    z-index: 2;
  }
  .sidebar.open ~ .home-section {
    left: 250px;
    width: calc(100% - 250px);
  }
  .home-section .text {
    display: inline-block;
    color: var(--bg-color);
    font-size: 25px;
    font-weight: 500;
    margin: 18px;
  }
  .my-scroll-active {
    overflow-y: auto;
  }
  #my-scroll {
    overflow-y: auto;
    height: calc(100% - 60px);
  }
  #my-scroll::-webkit-scrollbar {
    display: none;
    

  }
   .sidebar li.customer-tab a,
  .sidebar li.customer-tab router-link {
    background: blue; 
  }

  @media (max-width: 420px) {
    .sidebar li .tooltip {
      display: none;
    }
  }
</style>