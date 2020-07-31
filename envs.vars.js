module.exports = {

    Env: null,
    environment_params:{

        qa:{
           url: 'https://qa-64.jhinvestments.com',
           username: 'aditya_nandy@jhancock.com',
           password: 'annuclare'



        },
        stage:{
            url: 'https://stage-64.jhinvestments.com',
            username: 'aditya_nandy@jhancock.com',
            password: 'annuclare'



         },
         prod:{
            url: 'https://www.jhinvestments.com',
            username: 'aditya_nandy@jhancock.com',
            password: ''

            
         }
    },

    pageNavigation:{
       home: '/portfolio-insight',
       portfoliopage: '/portfolio-insight/portfolios',
       dashboardpage: '/portfolio-insight/dashboard',
       comparepage:   '/portfolio-insight/compare'
    }


}