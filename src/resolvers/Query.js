function vendors(parent, args, context, info) {
  return context.prisma.vendors()
}

function customers(parent, args, context, info) {
  return context.prisma.customers()
}

function bills(parent, args, context, info) {
  return context.prisma.bills()
}

function invoices(parent, args, context, info) {
  return context.prisma.invoices()
}

function accounts(parent, args, context, info) {
  return context.prisma.accounts()
}

function users(parent, args, context, info) {
  return context.prisma.users()
}

async function searchBills(parent, args, context) {
  const count = await context.prisma
    .billsConnection({
      where: {
        OR: [
          { id_contains: args.filter },
          { accountId: { name_contains: args.filter}},
          { vendorId: { name_contains: args.filter}},
        ],
      },
    })
    .aggregate()
    .count()

  const bills = await context.prisma.bills({
    where: {
      OR: [
        { id_contains: args.filter },
        { accountId: { name_contains: args.filter}},
        { vendorId: { name_contains: args.filter}},
      ],
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  return {
    count,
    bills,
  }
}


// graph QL filter takes a string and not an int for amount, which is why amount does not work
async function searchInvoices(parent, args, context) {
  const count = await context.prisma
    .invoicesConnection({
      where: {
        OR: [
          { customer_contains: args.filter },
          { account_contains: args.filter },
          // { amount_contains: args.amountFilter },
        ],
      },
    })
    .aggregate()
    .count()
  const invoices = await context.prisma.invoices({
    where: {
      OR: [
        { customer_contains: args.filter },
        { account_contains: args.filter },
        // { amount_contains: args.amountFilter },
      ],
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  return {
    count,
    invoices,
  }
}

module.exports = {
  vendors,
  customers,
  bills,
  invoices,
  accounts,
  searchBills,
  searchInvoices
}
